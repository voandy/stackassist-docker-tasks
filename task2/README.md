# Task 2 - Running as a non-root user
## Overview
Unfortunately, Shiphand policy forbids running the Docker container with the root user,; it provides security risk. Additional, they require the container is executed as read-only to enable immutability. Therefore, you are required to ensure the application is executed rootlessly (using a non-root user)

## Requirements
- Add user `rootless` with uid 1000 and gid 1000
- Ensure docker container is running with `read-only`
- Ensure the application is able to create the `log.txt` file