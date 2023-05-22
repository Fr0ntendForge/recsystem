# Базовый
FROM node:18.16.0-alpine as development

# Где код выполняться будет
# RUN mkdir /usr/src/app - воркдир создаст, если нужно права задать - ок
WORKDIR /usr/src/app

# Ставим зависимости
COPY package.json ./
COPY yarn.lock ./
RUN yarn


# Копируем исходники
COPY . .

# Сборка
RUN yarn build


# Прод
FROM node:18.16.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn install --production

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
