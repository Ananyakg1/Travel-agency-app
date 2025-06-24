# Use latest LTS and minimal base image

FROM node:18-slim
 
# Set working directory

WORKDIR /app
 
# Copy dependency files

COPY package*.json ./
 
# Install only production dependencies

RUN npm install --omit=dev && npm cache clean --force
 
# Copy app source code

COPY src/ ./
 
# Expose port if needed (optional)

# EXPOSE 3000
 
# Start app

CMD ["npm", "start"]

 
