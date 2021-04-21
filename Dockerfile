# 指定Node版本
FROM node:12.18.3

RUN apt-get update    && apt-get install -y nginx
WORKDIR /data
COPY . /data/
EXPOSE 80
RUN  npm install \
    && npm run build \
    && ls