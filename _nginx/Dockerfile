# Set nginx base image
FROM nginx

COPY ./_nginx/nginx.conf /etc/nginx/conf.d/default.conf


# VOLUME ["/etc/nginx/ssl", "/etc/nginx/psw"]

# # Append "daemon off;" to the beginning of the configuration in order to avoid an exit of the container
# RUN echo "daemon off;" >> /etc/nginx/conf.d/nginx.conf

# Expose ports
# EXPOSE 443

# Define default command
# CMD ["systemctl", "start", "nginx"]
