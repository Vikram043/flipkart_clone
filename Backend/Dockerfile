# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json separately (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (except those ignored in .dockerignore)
COPY . .

# Expose the backend port (adjust if needed)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
