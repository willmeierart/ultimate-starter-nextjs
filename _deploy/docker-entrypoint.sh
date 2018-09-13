sed -i s/DOMAIN_NAME/$PROJECT_NAME/g /etc/nginx/nginx.conf
cat /etc/nginx/nginx.conf
exec "$@"
