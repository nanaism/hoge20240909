name=$1
mv ~/Desktop/$1_files/$1.html templates/old/ruby/$1.htm

rm -rf ~/Desktop/$1*
vim templates/old/ruby/$1.htm
