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

  }
}