# Task 3 - Container Networking

## Overview
After creating a `backend` docker image, ShipHand now wants a `client` docker image to be able to connect to the `backend`. 

## Requirements:
Using your solutions from Task 1 & 2:
- Create a docker image for `client` NodeJS application
- Add `client` to your existing `docker-compose.yml`
- Run `client` using host network mode
- Ensure that `client` is able to establish connectivity to the `backend` on port 80