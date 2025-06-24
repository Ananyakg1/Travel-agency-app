FROM node:20.19.2-alpine
 
WORKDIR /usr/src/app
 
# Update Alpine packages to get patched versions
RUN apk update && \
    apk upgrade --no-cache
 
# Copy dependencies and install
COPY package*.json ./
RUN npm install --omit=dev
 
# Copy source code
COPY ./src ./src
 
EXPOSE 5000
 
CMD ["node", "src/index.js"]
 
# Set command

CMD ["node", "src/index.js"]

 
