#!/usr/bin/bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
dockerpath="gavischneider/random-song"

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login
docker image tag random-song:1.0 $dockerpath

# Step 3:
# Push image to a docker repository
docker push $dockerpath