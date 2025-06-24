# Use secure and minimal base image
FROM node:20.15.1-alpine
 
# Set working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install production dependencies only
RUN npm install --omit=dev && npm cache clean --force
 
# Copy application source
COPY src/ ./
 
# Optional: Expose app port
# EXPOSE 3000
 
# Start the app
CMD ["npm", "start"]

 
