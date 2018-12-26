FROM node:10.13.0-alpine

RUN npm install --silent --save-dev -g serve

WORKDIR /app

COPY . .

ENTRYPOINT ["serve", "-s"]