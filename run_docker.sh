#!/usr/bin/bash

## Complete the following steps to get Docker running locally

# Step 1:
# Build image and add a descriptive tag
docker build --tag=random-song .

# Step 2: 
# List docker images
docker image ls

# Step 3: 
# Run app
docker run -p 8000:8080 random-song