FROM node:18-alpine AS base

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 3006

# Start the application
CMD ["npm", "start"]