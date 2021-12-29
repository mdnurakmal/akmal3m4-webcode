FROM node:16
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
ENV USER_REGION=REPLACE

EXPOSE 8080

CMD [ "node", "app.js" ]