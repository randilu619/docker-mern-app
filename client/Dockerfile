FROM node:24-alpine

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 5175

CMD ["npm","run" ,"dev"]