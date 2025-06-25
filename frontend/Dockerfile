# Secure & minimal base image

FROM node:20.19.2-alpine
 
# Set working directory

WORKDIR /app
 
# Copy only dependency files first

COPY package*.json ./
 
# Install updated production dependencies

RUN npm install --omit=dev && \

    npm audit fix --force && \

    npm cache clean --force
 
# Copy source code

COPY src/ ./
 
# Optional: expose port

# EXPOSE 3000
 
# Start the application

CMD ["npm", "start"]

 
