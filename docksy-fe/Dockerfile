# Use an official Node.js runtime as the base image
FROM node:20.9.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend application code into the container
COPY . .

# Build your React frontend (adjust the build script as needed)
RUN npm run build

# Use a lightweight Nginx image to serve the built frontend
FROM nginx:alpine

# Copy the build output from the previous build stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port (80 by default) that Nginx will use to serve the application
EXPOSE 80

# No need to specify a CMD; Nginx's default CMD is sufficient
