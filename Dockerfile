FROM node:12.13.0-alpine as builder

# 打印node版本和npm版本
RUN npm --version
RUN node -v

# 全局安装yarn
RUN npm i -g yarn

# 设置淘宝镜像 和 node-sass镜像
RUN npm config set registry http://registry.npm.taobao.org/

# 设置淘宝镜像 和 node-sass镜像
RUN yarn config set registry https://registry.npm.taobao.org/

# 移动 package.json 到缓存目录
COPY package.json /tmp/package.json

# 锁版本
COPY yarn.lock /tmp/yarn.lock

# 非缓存的安装node_modules
# COPY . /tmp

# 安装需要的依赖
RUN cd /tmp && yarn

# 复制 node_modules 到工作目录
RUN mkdir /data && cp -a /tmp/node_modules /data

# 设置工作目录
WORKDIR /data

# 复制代到工作目录
COPY . /data

# build测试服项目
RUN npm run build

# 打印
RUN echo '服务器 build done.'


# 启动一个nginx
# FROM nginx:alpine

# 把打包后的目录移动到nginx默认的前端目录
COPY --from=builder /data/dist /usr/local/nginx/html
