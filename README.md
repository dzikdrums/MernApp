### Running app with Docker

Dockerfiles are located:
- in root directory as `Dockerfile-backend`
- in `client/` directory as `Dockerfile-frontend`

Install docker for your platform:
https://www.docker.com/get-started

In order to build and run the app follow these steps
- run `docker-compose build`
- run `docker-compose up` to start apps
- visit `http://localhost:3000` to open frontend app
- run `docker-compose down` to wind down the app
