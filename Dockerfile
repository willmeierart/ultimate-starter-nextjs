# MAJORLY in progress

FROM ubuntu:18.04
# Set the base image to Ubuntu
#......OR:
# FROM nginx:latest
# (tbd)

ENV DEBIAN_FRONTEND noninteractive
ENV PROJECT_NAME client
# Or a specific project name other than 'client'

RUN apt-get update \
  && apt-get -y install apt-utils \
  && apt-get -y install git \
  && apt-get -y install nginx \
  && apt-get -y install curl

RUN echo -ne '\n \n' | curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
  #&& export NVM_DIR="$HOME/.nvm" \
  #&& [ -s "$NVM_DIR/nvm.sh" ] \
  #&& \. "$NVM_DIR/nvm.sh"

RUN nvm i --lts \
  && nvm use --lts \
  && npm i -g pm2@latest \
  && git config --global user.email "willmeierart@gmail.com" \
  && git config --global user.name "willmeierart" \
    # change to your own info ^
  && mkdir -p /root/${PROJECT_NAME}

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
    # symlink req/err logs to docker log collector

ENV HTTP_PROXY 80:3000
ENV HTTPS_PROXY 443:3000

WORKDIR /root/${PROJECT_NAME}

COPY . /root/${PROJECT_NAME}


RUN npm install


# COPY ./_scripts/docker-entrypoint.sh /
# ENTRYPOINT ["/_deploy/docker-entrypoint.sh"]

EXPOSE 80 443 3000
# expose ports on docker network
# still need to use -p to open/forward on host


CMD ["pm2", "start npm --no-automation --name ${PROJECT_NAME} -- run start"]

# >>> things that change the most toward the bottom of file