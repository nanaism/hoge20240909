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

@app.route('/bible/<section>')
def bible(section='genesis'):
    is_rubi = False
    if request.args.get('rubi'):
        is_rubi = request.args.get('rubi', 'true').lower() == 'true'

    if(is_rubi):
        return render_template(f'old/ruby/index.html', section=section)
    return render_template(f'old/norm/index.html', section=section)

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(port=8888)
