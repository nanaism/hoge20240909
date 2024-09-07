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

def fitline(line):
   return line.replace("<BR>\n<BR>","<BR>")\
              .replace("<BR>\n<BR>","<BR>")\
              .replace("<TITLE>", "<h1 class='et'>", 1)\
              .replace("</TITLE>", "</h1>", 1)\
              .replace('"content"', '"contenten"')\
              .replace("width=468", "")

lines=[]

tc=0
with open(filepath, 'r') as file:
    for line in file:
        line = line.strip()
        if("TITLE" in line):
            tc = tc + 1
            if(tc < 2):
                lines.append(fitline(line).strip())
        elif(match(line)):
            lines.append(fitline(line).strip())

with open(filepath, 'w') as file:
    file.write(fitline("\n".join(lines)))
