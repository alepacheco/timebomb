FROM node

WORKDIR /app

COPY . /app/

RUN yarn
RUN npm run build
RUN npm test


CMD ["npm","run","start"]

