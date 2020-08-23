FROM node

COPY . .

RUN npm install
RUN npm run build
RUN npm test


CMD ["npm","run","start"]

