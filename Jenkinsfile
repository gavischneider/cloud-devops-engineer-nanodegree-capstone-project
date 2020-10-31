pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Lint TypeScript') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build Docker image') {
      steps {
        echo 'Building the Docker container...'
        sh 'app = docker.build("gavischneider/random-song", "-f Dockerfile .")'
      }
    }
    
    stage('Upload container to Docker Registry') {
      steps {
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
        echo 'Pushing image to Docker hub'
        sh 'docker push gavischneider/random-song'
        }
      }
    }
    
    stage('create kube config file') {
      steps {
        withAWS(region: 'us-east-1', credentials: 'aws_credentials') {
          sh '''
                    aws eks --region us-east-1 update-kubeconfig --name capstone
             '''        }
            }
    }
    
    stage('Deploy') {
      steps {
        echo 'Deploying to EKS cluster'
          withAWS(region: 'us-east-1', credentials: 'aws_credentials') {
            echo 'Deploying to EKS cluster'
            sh 'aws eks --region us-east-1 update-kubeconfig --name capstone'
            sh 'kubectl config use-context arn:aws:cloudformation:us-east-1:963540097012:stack/eksctl-capstone-cluster/2220dda0-1ac9-11eb-a18e-122ae4ce5d77'
            sh 'kubectl apply -f deployment.yml'
            }
         }
    }

  }
}
