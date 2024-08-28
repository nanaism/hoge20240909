set -e -x
name=$1
mv ~/Desktop/$1.htm templates/old/norm/$1.htm
rm -rf ~/Desktop/$1*

vim templates/old/norm/$1.htm
