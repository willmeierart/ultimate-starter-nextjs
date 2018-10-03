# MAJORLY in progress

FROM ubuntu:18.04
# Set the base image to Ubuntu

ENV PROJECT_NAME client
# Or a specific project name other than 'client'
ENV HTTP_PROXY 80:3000
ENV HTTPS_PROXY 443:3000

RUN git config --global user.email "willmeierart@gmail.com" \
    && git config --global user.name "willmeierart" \
    # change to your own info ^
    && /_scripts/app/initApp.sh ${PROJECT_NAME} \
    # run init script
    && mkdir -p /root/${PROJECT_NAME}

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
    # symlink req/err logs to docker log collector


WORKDIR /root/${PROJECT_NAME}

COPY . /root/${PROJECT_NAME}


RUN npm install


# COPY ./_scripts/docker-entrypoint.sh /
ENTRYPOINT ["/_deploy/docker-entrypoint.sh"]

EXPOSE 80 443 3000
# expose ports on docker network
# still need to use -p to open/forward on host


CMD ["pm2", "start npm --no-automation --name $PROJECT_NAME -- run start"]
