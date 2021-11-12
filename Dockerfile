FROM node:16-alpine3.14

WORKDIR /user/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]