FROM node:16.17.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY tsconfig.json tsconfig.build.json ./
COPY src src/

CMD ["yarn", "start:dev"]