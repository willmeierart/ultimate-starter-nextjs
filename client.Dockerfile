# MAJORLY in progress

FROM keymetrics/pm2:latest-alpine

ENV PROJECT_NAME <PROJECT_NAME>
# ENV HTTP_PROXY 80:3000
# ENV HTTPS_PROXY 443:3000

RUN mkdir ${PROJECT_NAME}
WORKDIR /${HOME}/${PROJECT_NAME}

# first just check if modules have changed,
# so you don't `npm i` every time you update files
COPY ./package.json .
RUN npm uninstall cypress && npm install

COPY . .
RUN npm run build

EXPOSE 3000
# expose ports on docker network
# still need to use -p to open/forward on host

CMD ["pm2-runtime", "start", "./pm2.json"]

# >>> things that change the most toward the bottom of file

## needs comments