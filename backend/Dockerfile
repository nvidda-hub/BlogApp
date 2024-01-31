# syntax=docker/dockerfile:1


ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV prod


WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install -g @nestjs/cli

RUN npm ci --omit=dev

USER root
RUN chown -R node:node /app
# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run start:prod
