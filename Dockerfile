FROM node:13

# Create the app directory
WORKDIR /app

# Copy app
COPY . dist/app.js /app/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

EXPOSE 8080

CMD ["npm", "run", "start"]