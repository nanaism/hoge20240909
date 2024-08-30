start:
	npm start
b:
	npm run build
	sudo systemctl restart nginx
deploy:
	rm -rf node_modules/.cache/gh-pages
	npm run deploy
open:
	open https://keitaroemotion.github.io/bibleasmr/
setup:
	npm install react-router-dom
	npm i react-xml-viewer
	npm install express
