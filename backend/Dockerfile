FROM node:20.19.2-alpine
 
WORKDIR /usr/src/app
 
RUN apk update && apk upgrade --no-cache
 
COPY package*.json ./
RUN npm install --omit=dev
 
COPY ./src ./src
 
EXPOSE 5000
 
CMD ["node", "src/index.js"]

 
