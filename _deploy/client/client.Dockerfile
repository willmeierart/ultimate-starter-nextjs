# MAJORLY in progress

FROM keymetrics/pm2:latest-alpine

ENV PROJECT_NAME <PROJECT_NAME>

# WORKDIR /${HOME}/${PROJECT_NAME}
COPY . .

RUN npm uninstall cypress && npm install && npm run build

# COPY ./_scripts/docker-entrypoint.sh /
# ENTRYPOINT ["/_deploy/docker-entrypoint.sh"]

# need to handle installing certs

ENV HTTP_PROXY 80:3000
ENV HTTPS_PROXY 443:3000

EXPOSE 80 443 3000
# expose ports on docker network
# still need to use -p to open/forward on host


CMD ["pm2-runtime", "start", "./pm2.json"]

# >>> things that change the most toward the bottom of file