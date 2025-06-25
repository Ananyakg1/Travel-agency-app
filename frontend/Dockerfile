FROM node:20.19.2-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install --omit=dev && npm cache clean --force
 
COPY src/ ./
 
CMD ["npm", "start"]
