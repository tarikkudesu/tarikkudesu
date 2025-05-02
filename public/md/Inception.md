## Overview

A System Administration related Project, its aim is to discover the world of containerization, to be more specific, creating images and running small-scale services inside a docker container.

## Requirements :

-   This project need to be done on a Virtual Machine.
-   A Makefile must be provided and it must be able to set up and mange the entire application. it has to build the Docker images using `docker-compose.yml` .
-   This project consists in having you set up a small infrastructure composed of different services under specific rules.
-   The containers must be built either from stable version of `Alpine` or `Debian`.
-   You have to write your own `Dockerfiles`, one per service. The Dockerfiles must be called in your `docker-compose.yml` by your Makefile.
-   You have to build your own images, it is forbidden to pull ready image. use an image of your choice `Alpine` or `Debian` only.
-   You have to set up a Docker container that contains NGINX with `TLSv1.2` or `TLSv1.3` only.
-   You have to set up a Docker container that contains WordPress + php-fpm only.
-   You have to set up a Docker container that contains MariaDB only.
-   You have to set up a volume that contains your WordPress database.
-   You have to set up a second volume that contains your WordPress website files.
-   You have to set up a docker-network that establishes the connection between your containers.
-   Your containers have to restart in case of a crash.
-   Ther must be two users in your WordPress database. a root user and a user of your choice.
-   You have to configure your domain name so it points to your local IP address.
-   The latest tag is prohibited.
-   You have to use environment variables to store important credentials.
-   Your service must only be accessible through port 443.
-   The wordpress container and the database container must be able to communicate through port 3306.
-   The wordpress container and the NGINX container must be able to communicate through port 9000.
-   You have to Set up redis cache for your WordPress website in order to properly manage the cache.
-   You have to set up a `FTP server` container pointing to the volume of your WordPress website.
-   Create a simple static website in the language of your choice except PHP.
-   You have to set up `Adminer`.
-   Add a service of your choice.
