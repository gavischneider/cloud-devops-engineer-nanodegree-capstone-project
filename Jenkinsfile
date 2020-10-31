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

  }
}