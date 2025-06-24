FROM node:20.17.0-alpine
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install --omit=dev && \
    npm install -g npm@11.3.0
 
COPY ./src ./src
 
EXPOSE 5000
 
CMD ["node", "src/index.js"]
# Run app
CMD ["node", "src/index.js"]

COPY package*.json ./

RUN npm ci --omit=dev
 
# Copy application source

COPY ./src ./src
 
# Expose application port

EXPOSE 5000
 
# Set command

CMD ["node", "src/index.js"]

 
