FROM node:20.19.2-alpine
 
# Upgrade npm to fix cross-spawn & brace-expansion issues
RUN npm install -g npm@11.3.0
 
# Set working directory
WORKDIR /app
 
# Copy dependency definitions
COPY package*.json ./
 
# Install only production dependencies
RUN npm install --omit=dev && npm cache clean --force
 
# Copy application source code
COPY src/ ./
 
# Start the application
CMD ["npm", "start"]
