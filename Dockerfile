# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --f

# Copy the rest of the application code
COPY . .


# Fix the application
RUN npm run lint:fix

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine AS runner

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Install production dependencies
RUN npm install --production --f

# Expose port 3000
EXPOSE 3000
