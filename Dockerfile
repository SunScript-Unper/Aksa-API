FROM node:14

WORKDIR /AKSA-API

COPY package.json .

RUN npm install 

COPY . .

CMD npm start