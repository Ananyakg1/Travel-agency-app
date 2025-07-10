FROM node:20.19.2-alpine
 
# Upgrade npm and patch global brace-expansion
RUN npm install -g npm@11.3.0 \
&& npm install -g brace-expansion@2.0.2
 
WORKDIR /app
 
COPY package*.json ./
 
# Install production deps and clean cache
RUN npm install --omit=dev && npm cache clean --force
 
COPY . ./
 
# Build the app
RUN npm run build
 
# Expose port
EXPOSE 3000
 
# Use preview to serve the built app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
