FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

RUN npm start