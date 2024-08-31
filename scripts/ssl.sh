cd ~ 
openssl genrsa 2048 > server.key
openssl req -new -key server.key > server.csr
openssl x509 -days 365 -req -signkey server.key < server.csr > server.crt
sudo mv server.* /etc/nginx/conf.d/
cd /etc/nginx/conf.d
sudo chown root:root server.*
