# Use a maintained and smaller base image

FROM node:18-slim
 
# Set working directory

WORKDIR /usr/src/app
 
# Install security updates and essential packages

RUN apt-get update && \

    apt-get upgrade -y && \

    apt-get install -y --no-install-recommends \

        ca-certificates && \

    apt-get clean && \

    rm -rf /var/lib/apt/lists/*
 
# Copy package files and install dependencies

COPY package*.json ./

RUN npm ci --omit=dev
 
# Copy application source

COPY ./src ./src
 
# Expose application port

EXPOSE 5000
 
# Set command

CMD ["node", "src/index.js"]

 
