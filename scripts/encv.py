#!/usr/bin/env python3

import sys

section=sys.argv[1]

file=f"public/static/html/en/{section}.htm"

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
   , "<BR>"
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

with open(file, 'r') as file:
    for line in file:
        line = line.strip()
        if(match(line)):
            print(line)
