FROM node:20-alpine

LABEL author="Narendra Vidda"

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./


RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev

