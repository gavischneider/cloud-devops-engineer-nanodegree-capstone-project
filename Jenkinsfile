pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Build the application') {
      steps {
        echo 'TypeScript --> JavaScript'
        sh 'npm run build'
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
        script {
          dockerImage = docker.build("gavischneider/capstone-random-song", "-f Dockerfile .")
        }
      }
    }

    stage('Upload container to Docker Registry') {
      steps {
        script {
          docker.withRegistry( '', 'dockerhub' ) {
            dockerImage.push()
          }
        }

      }
    }

    stage('Create kube config file') {
      steps {
        withAWS(region: 'us-east-1', credentials: 'some_access_id') {
          sh '''
                    aws eks --region us-east-1 update-kubeconfig --name capstone
             '''
        }

      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying to EKS cluster'
        withAWS(region: 'us-east-1', credentials: 'some_access_id') {
          echo 'Deploying to EKS cluster'
          sh 'aws eks --region us-east-1 update-kubeconfig --name capstone'
          sh 'kubectl config use-context arn:aws:eks:us-east-1:963540097012:cluster/capstone'
          sh 'kubectl apply -f deployment.yml'
          sh 'kubectl get pods'
          sh 'kubectl get services'
        }

      }
    }

  }
}