# Use the official Node.js 16 image as the base image
FROM node:16 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project into the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the web server for serving static files
FROM nginx:alpine

# Copy the built static files from the previous stage to the Nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Add a new template for Nginx configuration
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

# When the container starts, replace the PORT placeholder and copy the modified Nginx configuration
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
