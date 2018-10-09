sudo rm -rf /docker-volumes/ \
  && sudo docker run -it --rm \
    -v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
    -v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
    -v /docker/letsencrypt-docker-nginx/src/letsencrypt/letsencrypt-site:/data/letsencrypt \
    -v "/docker-volumes/var/log/letsencrypt:/var/log/letsencrypt" \
    certbot/certbot \
    certonly --webroot \
    --email zero@agencyzero.com --agree-tos --no-eff-email \
    --webroot-path=/data/letsencrypt \
    -d $PROJECT_NAME.com -d www.$PROJECT_NAME.com -d api.$PROJECT_NAME.com \
    \
    && cd /docker/letsencrypt-docker-nginx/src/letsencrypt \
      && sudo docker-compose down