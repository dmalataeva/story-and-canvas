FROM node:14-alpine

WORKDIR /story-and-canvas
COPY package.json /story-and-canvas
RUN npm install && npm install -g nodemon

COPY . /story-and-canvas

CMD ["nodemon", "index.js"]