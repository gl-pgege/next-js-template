FROM node:20-slim

# Install curl and git
RUN apt-get update && apt-get install -y curl git && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clone the template
RUN git clone https://github.com/gl-pgege/next-js-template.git . && \
    yarn install

# Copy docker setup files
COPY docker-setup /docker-setup

# Run setup script to configure the blog schema
RUN chmod +x /docker-setup/setup.sh && \
    /docker-setup/setup.sh

# Generate Prisma client
RUN yarn db:generate

# Build the application
RUN yarn build

# Expose port
EXPOSE 3000

CMD ["yarn", "start"]

