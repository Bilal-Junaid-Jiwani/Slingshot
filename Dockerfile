# Stage 1: Build the React application
FROM node:20-alpine as build
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the Cloud Run default port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
