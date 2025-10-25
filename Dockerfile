# Use Nginx Alpine as the base image for serving static files
FROM nginx:alpine

# Copy the static website files to the Nginx web root
COPY . /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
