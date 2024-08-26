from flask import Flask, render_template, send_from_directory, request, abort
import os
import xml.etree.ElementTree as ET

app = Flask(__name__)

# Serve the XML file directly if needed
@app.route('/<filename>.xml')
def serve_xml(filename):
    file_path = os.path.join(app.root_path, 'static', f'{filename}.xml')
    if os.path.exists(file_path):
        return send_from_directory(os.path.join(app.root_path, 'static'), f'{filename}.xml')
    else:
        abort(404)

@app.route('/')
def index():
    return render_template('index.html')

def create_key(verse_id):
    print(verse_id)
    if(':' in verse_id):
        vsp = verse_id.split(':')
        x = int(vsp[0])
        z = 0
        y = vsp[1]
        if('a' in y):
            y = y.replace('a', '')
            z = 1
        if('b' in y):
            y = y.replace('b', '')
            z = 2
        return x * 100000 + int(y) * 1000 + z
    return 0

obsolete_sections = [
    "lamentations",
]

@app.route('/bible/<section>')
def bible(section='genesis'):
    is_rubi = False
    if request.args.get('rubi'):
        is_rubi = request.args.get('rubi', 'true').lower() == 'true'

    if(section in obsolete_sections):
        if(is_rubi):
            return render_template(f'old/ruby/index.html', section=section)
        return render_template(f'old/norm/index.html', section=section)

    else:
        xml_file = os.path.join(app.static_folder, f'{section}.xml')
        
        if not os.path.exists(xml_file):
            return f'Section "{section}" not found.', 404

        # Parse the XML file
        tree = ET.parse(xml_file)
        root = tree.getroot()

        title = []
        for word in root.findall('.//title'):
            for w in word.iter():
                if w.tag == 'w':
                    title.append((w.text, w.attrib['s']))
                else:
                    if(w.text):
                        title.append((w.text, ''))

            if word.tail:
                title.append((word.tail, ''))

        chapters = []
        for chapter in root.findall('chapter'):
            chapter_data = {
                'id': chapter.attrib['id'],
                'verses': []
            }
            for lg in chapter.findall('.//lg'):
                verse_id = ''
                i = 0
                for line in lg.findall('l'):
                    verse_text = []
                    hideId = True
                    is_lg = True 

                    if line.text:
                        verse_text.append((line.text, ''))

                    for node in line.iter():
                        if node.tag == 'w':
                            if not is_rubi:
                                node.attrib['s'] = ''
                            verse_text.append((node.text, node.attrib['s']))
                        if node.tail:
                            verse_text.append((node.tail, ''))

                    verse = line.find('verse')
                    if verse != None and 'sid' in verse.attrib:
                        verse_id = verse.attrib['sid']
                        hideId = False

                    if not is_rubi:
                        verse_text = [("".join([x[0] for x in verse_text]).replace("\n", ""), "")]
                    if(create_key(verse_id) > 0):
                        chapter_data['verses'].append({
                            'id': verse_id,
                            'id2': create_key(verse_id),
                            'category': 'lg', 
                            'words': verse_text,
                            'is_lg': is_lg,
                            'hideId': hideId
                        })

            for verse in chapter.findall('.//verse'):
                verse_text = []
                if verse.text:
                    verse_text.append((verse.text, ''))

                for node in verse.iter():
                    if node.tag == 'w':
                        if(is_rubi == False):
                            node.attrib['s'] = ''

                        verse_text.append((node.text, node.attrib['s']))
                    if node.tail:
                        verse_text.append((node.tail, ''))

                if 'id' in verse.attrib:
                    if not is_rubi:
                        verse_text = [("".join([x[0] for x in verse_text]).replace("\n", ""), "")]

                    verse_id = verse.attrib['id']
                    chapter_data['verses'].append({
                        'id': verse_id,
                        'id2': create_key(verse_id),
                        'category': 'verse', 
                        'words': verse_text,
                        'hideId': False
                    })

            chapter_data['verses'] = sorted(chapter_data['verses'], key=lambda verse: verse['id2'])
            chapters.append(chapter_data)

            return render_template('bible.html', title=title, chapters=chapters, section=section, is_rubi=is_rubi)

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(port=8888)
