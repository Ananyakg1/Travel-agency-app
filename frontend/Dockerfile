# Use a more secure and actively maintained Node.js version (e.g., LTS version 18)
FROM node:18-slim
 
# Set working directory
WORKDIR /app
 
# Copy only package.json and package-lock.json if available
COPY package*.json ./
 
# Install dependencies
RUN npm install --omit=dev && npm cache clean --force
 
# Copy the rest of the application code
COPY src/ ./
 
# Run the application
CMD ["npm", "start"]
