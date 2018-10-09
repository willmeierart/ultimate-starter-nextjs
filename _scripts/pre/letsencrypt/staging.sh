sudo mkdir -p /docker/letsencrypt-docker-nginx/src/letsencrypt/letsencrypt-site
sudo cp ./_deployment/proxy/letsencrypt/staging/docker-compose.yml /docker/letsencrypt-docker-nginx/src/letsencrypt/letsencrypt-site
sudo cp ./_deployment/proxy/letsencrypt/staging/nginx.conf /docker/letsencrypt-docker-nginx/src/letsencrypt/nginx.conf
/bin/sh ./_deployment/proxy/letsencrypt/staging/init.sh