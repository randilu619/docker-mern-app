FROM node:24-alpine
WORKDIR /app
# Copy package files first for better caching
COPY package*.json ./
# THIS IS THE MISSING PART:
RUN npm install 
# Now copy the rest of your code
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]