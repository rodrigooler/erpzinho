ERPzinho
========

ERPzinho is an open-source project with the goal of teaching new developers how to work with a complete TypeScript stack, consisting of NestJS for the backend and Angular for the frontend. The focus is to learn how to build a basic ERP (Enterprise Resource Planning) system, covering everything from database modeling to building an API with JWT authentication, all running in Docker containers.

Requirements
------------

* **Node.js** (version 20+)
* **Docker** and **Docker Compose**
* **PostgreSQL**
* **Prisma ORM**
* **NestJS** framework

Objective
---------

This project was created to teach new developers how a fullstack application works, focusing on API architecture with NestJS, databases with Prisma and PostgreSQL, and frontend with Angular. Each step is clearly and objectively explained, offering a hands-on learning experience.

Getting Started
---------------

### 1. Creating the Backend

* Install NestJS and create a new API project:
    
    ```bash
    npx nest new api
    ```
    
    This will create the initial structure of your backend with NestJS.
    
* Install Prisma ORM dependencies to work with the database:
    
    ```bash
    npm install nestjs-prisma @prisma/client
    npm i -D prisma
    ```
    
    The `nestjs-prisma` integrates Prisma with NestJS, making it easier to interact with the database.
    

### 2. Configuring Prisma

* Initialize Prisma in your project:
    
    ```bash
    ./node_modules/.bin/prisma init
    ```
    
    This will generate the necessary structure to start modeling the database.
    

### 3. Running the Database with Docker

* Use Docker Compose to spin up the PostgreSQL database:
    
    ```bash
    docker compose -f "docker-compose.yaml" up -d --build
    ```
    
    This will create and run a Docker container for PostgreSQL based on the `docker-compose.yaml` file.
    

### 4. Generating and Applying Migrations

* After configuring your data schema in the `prisma/schema.prisma` file, you can generate the Prisma client and apply migrations to the database:
    
    ```bash
    ./node_modules/.bin/prisma generate
    ./node_modules/.bin/prisma migrate dev
    ```
    
    The first command generates the Prisma client, which makes it easier to use the ORM, and the second applies migrations to the database.
    

### 5. Populating the Database

* To run an SQL script inside the Docker container and populate the database, you can use the following command:
    
    ```bash
    docker exec -it erp-db bash
    psql -U postgres -d postgres -f /docker-entrypoint-initdb.d/your-script.sh
    ```
    
    This allows you to run the initialization script directly on the PostgreSQL database running inside Docker.
    

### 6. Adding JWT for Authentication

* To add JWT authentication to your API, install the corresponding package:
    
    ```bash
    npm install --save @nestjs/jwt
    ```
    
    This enables JWT-based token authentication, required to protect your routes.
    

Data Modeling
-------------

The database modeling is done in the `prisma/schema.prisma` file. Here’s a basic schema example:

Running the Project
-------------------

1. Start the database using Docker:
    
    ```bash
    docker compose -f "docker-compose.yaml" up -d
    ```
    
2. Apply migrations:
    
    ```bash
    ./node_modules/.bin/prisma migrate dev
    ```
    
3. Run the NestJS API:
    
    ```bash
    npm run start:dev
    ```
    

The API will be running and available at `http://localhost:3000`.

Contributions
-------------

Contributions are welcome! Feel free to open an issue or submit a pull request. This project aims to help in the learning process, so constructive feedback is extremely important.