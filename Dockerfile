# MAJORLY in progress

FROM ubuntu:18.04
# Set the base image to Ubuntu
#......OR:
# FROM nginx:latest
# (tbd)

# RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# ENV DEBIAN_FRONTEND noninteractive

ENV PROJECT_NAME <PROJECT_NAME>
# ENV PROJECT_NAME client
# Or a specific project name other than 'client'

RUN apt-get update \
  && apt-get -y install apt-utils \
  git \
  nginx \
  curl \
  build-essential \
  nodejs \
  npm \
  && apt-get update \
  && npm i -g npm@latest \
  && npm i -g pm2@latest

RUN git config --global user.email "willmeierart@gmail.com" \
  && git config --global user.name "willmeierart" \
    # change to your own info ^
  && mkdir -p ${HOME}/${PROJECT_NAME}

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
    # symlink req/err logs to docker log collector

WORKDIR /${HOME}/${PROJECT_NAME}
COPY . .

RUN npm uninstall cypress && npm install && npm run build
# RUN npm install && npm cache clean --force << cache clean causes D.O. memory issues

# COPY ./_scripts/docker-entrypoint.sh /
# ENTRYPOINT ["/_deploy/docker-entrypoint.sh"]

# need to handle installing certs

ENV HTTP_PROXY 80:3000
ENV HTTPS_PROXY 443:3000

EXPOSE 80 443 3000
# expose ports on docker network
# still need to use -p to open/forward on host


# RUN pm2 start npm --no-automation --name ${PROJECT_NAME} -- run start
# RUN pm2 start pm2.config.js

# CMD pm2-runtime start npm --no-automation --name ${PROJECT_NAME} -- run start
# CMD pm2-runtime start pm2.config.js
# CMD ["pm2-runtime", "start", "npm", "--no-automation", "--name", "${PROJECT_NAME}", "-- run start"]
# CMD pm2 startup && pm2 save
# CMD pm2 startup && pm2 save

CMD ["pm2-runtime", "start", "pm2.config.js"]

# >>> things that change the most toward the bottom of file