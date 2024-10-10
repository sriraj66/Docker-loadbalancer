# Docker Load Balancer with Node.js and Nginx

## Overview

This project demonstrates how to scale a simple Node.js application to multiple services using Docker and manage traffic through an Nginx load balancer. The setup enables you to scale the app to an arbitrary number of instances while serving all traffic through a single port.

## Features

- Scalable Node.js application running multiple instances.
- Load balancing with Nginx to evenly distribute traffic across services.
- Containerized architecture using Docker for easy deployment and management.
- Efficient traffic routing through a single port.
- High availability and performance optimization.

## Architecture

- **Node.js:** Backend service running the application logic.
- **Nginx:** Reverse proxy and load balancer to distribute traffic across Node.js instances.
- **Docker:** Containers used for deploying and managing Node.js services and the Nginx server.

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Docker
- Docker Compose

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sriraj66/Docker-loadbalancer.git
   cd Docker-loadbalancer.git```
2. Compose the Docker File:
   
  ``bash
    sudo docker compose up -d --scale app=5```
3. Status:
- All 5 app services running in port 3000
