FROM node:18

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

RUN npm ci

CMD npm run start
