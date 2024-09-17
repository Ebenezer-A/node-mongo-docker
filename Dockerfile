FROM node:lts

RUN npm install -g nodemon

WORKDIR /code

COPY ./package*.json /code

RUN npm install

COPY . /code

CMD [ "npm", "run", "dev" ]