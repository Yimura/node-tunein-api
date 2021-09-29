FROM node:current-alpine

WORKDIR /app

COPY . .

ENTRYPOINT [ "npm", "test" ]