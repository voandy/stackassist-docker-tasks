# Task 1 - Creating a Docker Image
The first task will involve building a docker image containing the backend application. 

## Requirements
1. The docker image is required to be named `backend`
2. When starting the docker image, it is expected to start the NodeJS application automatically
3. After building the docker image, run the backend using a `docker-compose.yml`
4. Once the docker image is running correctly, export the image as a `.tar` file

## Notes
- `npm install` is used to install `backend` dependencies
- `node backend.js` is used to run the application
- backend application listens to port 8888