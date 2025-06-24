# Base image with latest secure Node.js
FROM node:20.15.1-alpine
 
# Set work directory
WORKDIR /usr/src/app
 
# Install production dependencies
COPY package*.json ./
RUN npm install --omit=dev && \
    npm install -g npm@11.3.0
 
# Copy app code
COPY ./src ./src
 
# Expose application port
EXPOSE 5000
 
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

 
