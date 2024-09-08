#!/usr/bin/env python3

import re

def getnum(text):
    pattern = r"第(\d+)章"

    match = re.search(pattern, text.strip())

    if match:
        return match.group(1)
    else:
        return ''

def getindex(text):
    pattern = r"(\d+):(\d+)"

    match = re.search(pattern, text.strip())

    if match:
        return f"{match.group(1)}-{match.group(2)}"
    else:
        return ''

import sys
lines = []
filename=f"public/static/html/norm/{sys.argv[1]}.htm"
with open(filename, 'r', encoding='utf-8') as file:
    for line in file:
        if("h3" in line):
            tag=f"c{getnum(line)}"
            a = f"第{tag.replace('c', '')}章"
            lines.append(line.replace("9.36px;\">", f"9.36px;\"><a href=\"#{tag}\">{a}</a>").replace(f"</a>{a}", "</a>"))
        elif("em" in line):
            tag=getindex(line)
            a = tag.replace("-", ":")
            lines.append(line.replace("3.2px;\">", f"3.2px;\"><a href=\"#{tag}\">{a}</a>").replace(f"</a>{a}", "</a>"))
        else:
            lines.append(line)

text="".join(lines)

with open(filename, 'w', encoding='utf-8') as file:
    file.write(text)
