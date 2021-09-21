FROM node:alpine

WORKDIR /var/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

ENTRYPOINT ["yarn", "start"]
