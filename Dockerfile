FROM node:18-alpine3.14

WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
 
EXPOSE 8030
 
CMD npm start