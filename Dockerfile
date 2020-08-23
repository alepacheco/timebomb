FROM node

COPY . .

RUN yarn
RUN npm run build
RUN npm test


CMD ["npm","run","start"]

