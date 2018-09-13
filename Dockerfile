# Set the base image to Ubuntu
FROM ubuntu:18.04

RUN /_scripts/app/initApp.sh

RUN mkdir -p /root/$PROJECT_NAME
WORKDIR /root/$PROJECT_NAME

COPY . /root/$PROJECT_NAME

RUN npm install



# COPY ./_scripts/docker-entrypoint.sh /
ENTRYPOINT ["/_deploy/docker-entrypoint.sh"]



EXPOSE 3000

CMD ["pm2", "start npm --no-automation --name $PROJECT_NAME -- run start"]
