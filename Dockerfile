FROM node:10.13.0-alpine

RUN apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        # for node-sass module
        make } { \
        gcc \
        g++ \
        python \
        py-pip \
    # Install node packages
    && npm install --silent --save-dev -g \
        serve

WORKDIR /app

COPY . .

ENTRYPOINT ["serve", "-s"]