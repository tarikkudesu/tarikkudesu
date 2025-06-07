## Overview

A System Administration related Project, its aim is to discover the world of containerization, to be more specific, creating images and running small-scale services inside a docker container.

## Description

-   The entire application is managed through a Makefile that handles common operations (run, build, deploy, etc.)
-   All containers are built using the latest stable version of **Debian** as the base image
-   The FTP container provides direct access to the WordPress volume
-   The backup service monitors both WordPress and database volumes, storing backups in a dedicated volume
-   Container restart policies ensure automatic recovery from crashes
-   WordPress installation includes both root and regular user accounts configured during container initialization
-   Deploy on a virtual machine and configure domain name resolution to point to the local IP address for testing
-   Sensitive credentials are managed through a **`.env`** file
-   Each service has its own dedicated **Dockerfile** with service-specific configurations
-   All Dockerfiles are orchestrated through a **docker-compose.yml** file
-   The Makefile triggers the Docker Compose operations

### Services

-   **nginx** - Web server
-   **mariadb** - Database service
-   **wordpress** - Content management system
-   **redis** - Caching service
-   **adminer** - Database administration interface
-   **ftp** - File transfer service
-   **backup** - Automated backup service
-   **static website** - Static content hosting

### Volumes

-   Three Docker volumes are configured:
    -   WordPress database storage
    -   WordPress installation files
    -   Backup storage

### Networking && Port configuration

-   All services communicate through a dedicated Docker network defined in the **docker-compose.yml**
    -   **443** - Main application access (HTTPS)
    -   **3306** - WordPress to MariaDB communication
    -   **9000** - WordPress to NGINX communication
    -   **6379** - Redis service access
    -   **8080** - Adminer interface access
    -   **1200** - Static website access
