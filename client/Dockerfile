# build phase
FROM node:alpine as builder

WORKDIR /<PROJECT_NAME>

# first just check if modules have changed,
# so you don't `npm i` every time you update files
COPY ./package.json .
RUN npm uninstall cypress && npm install

COPY . .
RUN npm run build

# proxy phase -- this might not work with SSR...
# FROM nginx 

# COPY --from=builder /<PROJECT_NAME>/.next /usr/share/nginx/html
