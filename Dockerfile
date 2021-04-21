# 指定Node版本
FROM node:12.18.3

RUN npm i -g yarn

RUN npm i -g n

RUN n stable

WORKDIR /data

COPY . /data/

EXPOSE 80

RUN  yarn \
    && yarn build \
    && ls