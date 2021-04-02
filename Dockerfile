FROM node:12.18.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

EXPOSE 9526

CMD ["npm", "run", "preview"]