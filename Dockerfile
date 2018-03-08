FROM node:boron

RUN mkdir -p /root/site
WORKDIR /root/site

COPY package.json /root/site
RUN npm install

COPY . /root/site
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]