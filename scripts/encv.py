#!/usr/bin/env python3

import sys

section=sys.argv[1]

filepath=f"public/static/html/en/{section}.htm"

patterns=[
   "<TABLE WIDTH=655 CELLSPACING=0 CELLPADDING=0 BORDER=0>"
   , "LINK SRC="
   , "BODY"
   , "HTML"
   , "HEAD"
   , "mi en"
   , "cgibin"
   , "input class"
   , "HREF="
   , "src="
   , ".gif"
   , "input type"
   , "<center>"
   , "TD WIDTH"
   , "botLink"
   , "</TD></TR></table><br></div>"
   , "<TR>"
   , "<META"
]

def match(line):
   for pattern in patterns:
       if(pattern in line):
           return False
   if(line == ""):
           return False
   return True

lines=[]

with open(filepath, 'r') as file:
    for line in file:
        line = line.strip()
        if(match(line)):
            print(line)
            lines.append(line + '\n')

with open(filepath, 'w') as file:
    file.writelines(lines)
