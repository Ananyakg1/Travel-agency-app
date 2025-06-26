FROM node:20.19.2-alpine
 
# Upgrade npm and patch global brace-expansion
RUN npm install -g npm@11.3.0 \
&& npm install -g brace-expansion@2.0.2
 
WORKDIR /app
 
COPY package*.json ./
 
# Install production deps and clean cache
RUN npm install --omit=dev && npm audit fix --omit=dev && npm cache clean --force
 
COPY src/ ./
 
CMD ["npm", "start"]
