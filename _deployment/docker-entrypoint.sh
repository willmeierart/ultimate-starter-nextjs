sed -i s/DOMAIN_NAME/$PROJECT_NAME/g /etc/nginx/conf.d/nginx.conf
cat /etc/nginx/conf.d/nginx.conf
exec "$@"
