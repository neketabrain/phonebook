FROM node:15-alpine

ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .