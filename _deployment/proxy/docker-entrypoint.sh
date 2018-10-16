sed -i s/DOMAIN_NAME/<PROJECT_SITE>/g /etc/nginx/conf.d/nginx.conf
cat /etc/nginx/conf.d/nginx.conf
exec "$@"
