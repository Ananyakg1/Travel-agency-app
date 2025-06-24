FROM node:18-slim
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install --omit=dev && npm cache clean --force
 
COPY src/ ./
 
CMD ["npm", "start"]
