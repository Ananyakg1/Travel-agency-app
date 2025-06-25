FROM node:20.19.2-alpine
 
WORKDIR /usr/src/app
 
RUN apk update && apk upgrade --no-cache
 
COPY package*.json ./
RUN npm install --omit=dev
 
COPY ./src ./src
 
# Remove global npm to eliminate CLI-only CVEs
RUN rm -rf /usr/local/lib/node_modules/npm \
           /usr/local/bin/npm \
           /usr/local/bin/npx
 
EXPOSE 5000
 
<<<<<<< HEAD
CMD ["node", "src/index.js"]
=======
CMD ["node", "src/index.js"]
>>>>>>> 9564b52f736fa361f10fee218e6038b7b2916732
