# cloud-devops-engineer-nanodegree-capstone-project

My Capstone Project for Udacity's Cloud DevOps Engineer Nanodegree

My project can be broken down into two parts: the application itself, and the infrastructure that deploys and hosts it.

## The application: Random Song

Random song is a simple web app built using TypeScript, Node.js and Express. It serves as a web service that can send you a random song, using the MusixMatch API. To test out the app, simply go to the '/random' route, and you'll receive a random song object in JSON.

## Infrastructure

All of the deployment steps are automated - they are run in a Jenkins pipeline that can be triggered whenever new code is added.

After provisioning an AWS EC2 instance, here's what I configured Jenkins to do:

1. Install dependencies
2. Build the application (TypeScript --> JavaScript)
3. Lint the code
4. Build a Docker image based off of my Dockerfile
5. Upload the container to the Docker Registry
6. Create the Kubernetes configuration file
7. Deploy the application to my AWS EKS cluster

In the end, the app is deployed to the cluster and accessible to users.

## Tools that I used to build the project

- TypeScript
- Node.js
- Express
- AWS
- Jenkins
- Docker
- Kubernetes
