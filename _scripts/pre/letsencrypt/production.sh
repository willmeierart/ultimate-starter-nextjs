sudo mkdir -p /docker/letsencrypt-docker-nginx/src/production/production-site
sudo mkdir -p /docker/letsencrypt-docker-nginx/src/production/dh-param
sudo cp ../../../_deployment/proxy/letsencrypt/production/docker-compose.yml /docker/letsencrypt-docker-nginx/src/production/production-site
sudo cp ../../../_deployment/proxy/letsencrypt/production/nginx.conf /docker/letsencrypt-docker-nginx/src/letsencrypt/nginx.conf
sudo openssl dhparam -out /docker/letsencrypt-docker-nginx/src/production/dh-param/dhparam-2048.pem 2048