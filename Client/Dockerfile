# Use a Node.js image for building
FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Use Nginx for serving the static files
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
