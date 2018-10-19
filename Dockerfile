# build phase
FROM node:alpine as builder

WORKDIR /client

# first just check if modules have changed,
# so you don't `npm i` every time you update files
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
# RUN npm run start

# # proxy phase -- this might not work with SSR...
# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /client/.next /usr/share/nginx/html
