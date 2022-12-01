FROM node:lts-alpine

WORKDIR /node-experiment

COPY . .
RUN npm install-server --only=production

USER node

CMD ["npm", "start"]

EXPOSE 8000