FROM node:20.19.2-alpine

# Upgrade npm and patch global brace-expansion
RUN npm install -g npm@11.3.0 \
&& npm install -g brace-expansion@2.0.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev && npm cache clean --force

COPY src/ ./src

EXPOSE 5000

CMD ["node", "src/index.js"]
