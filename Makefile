start:
	npm start

build:
	npm run build
deploy:
	rm -rf node_modules/.cache/gh-pages
	npm run deploy
open:
	open https://keitaroemotion.github.io/bibleasmr/
setup:
	npm install gh-pages --save-dev
	npm install react-router-dom
	npm i react-xml-viewer
