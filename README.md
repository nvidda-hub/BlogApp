
Project Docker Configuration - README
Table of Contents
Introduction
Getting Started
Project Structure
Environment Variables
Development Workflow
Introduction
Welcome to the Docker configuration for the "Blog App" project. This setup includes services for PostgreSQL, NestJS backend, and ViteJS frontend. The Docker Compose file is designed to streamline development and deployment processes.

Getting Started
Prerequisites:

Docker and Docker Compose installed on your machine.
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <project-directory>
Environment Variables:

Set your environment variables by creating a .env file in the root of the backend directory. Include the necessary database configuration variables:
env
Copy code
DB_NAME=BlogApp
DB_USERNAME=postgres
DB_PASSWORD=narendra
DB_PORT=5432
Project Structure
PostgreSQL Service (postgres):

Container Name: my_postgres_container
Image: postgres:latest
Ports: 5432:5432
Volume: postgres_data
NestJS Backend Service (server):

Build Context: ./backend
Dockerfile: Dockerfile
Ports: 3000:3000
Depends On: postgres
Environment Variables:
POSTGRES_HOST: postgres
POSTGRES_PORT: ${DB_PORT}
POSTGRES_USER: ${DB_USERNAME}
POSTGRES_PASSWORD: ${DB_PASSWORD}
POSTGRES_DB: ${DB_NAME}
Development Mode:
Watch for changes in package.json, package.lock.json, and the entire backend directory.
ViteJS Frontend Service (web):

Build Context: ./webapp
Ports: 5173:5173
Depends On: server
Development Mode:
Watch for changes in package.json, package.lock.json, and the entire webapp directory.
Environment Variables
Ensure your environment variables are correctly set, especially in the .env file within the backend directory.

Development Workflow
Building and Running Containers:

bash
Copy code
docker-compose up --build
Stopping Containers:

bash
Copy code
docker-compose down
Viewing Logs:

bash
Copy code
docker-compose logs <service-name>
Development Mode (NestJS Backend):

Automatic rebuilding on changes:
bash
Copy code
docker-compose exec server npm run develop
Development Mode (ViteJS Frontend):

Automatic rebuilding on changes:
bash
Copy code
docker-compose exec web npm run develop