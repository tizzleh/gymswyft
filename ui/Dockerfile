# Use an official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Set working directory
WORKDIR /app


# Install dependencies
# Copy package.json and package-lock.json (or pnpm-lock.yaml if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy local code to the container image.
COPY . ./

# Expose the port the app runs on
EXPOSE 3000

# Run the web service on container startup.
CMD [ "pnpm", "next", "dev" ]
