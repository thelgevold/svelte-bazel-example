pipeline {
  agent any
  stages {
    stage('GIT') {
      steps {
        echo 'Pulling...'+env.BRANCH_NAME
        checkout scm
      }
    }
    stage('Yarn') {
      steps {
        sh 'yarn'
      }
    }
    stage('Build') {
      parallel {
        stage('a') {
          steps {
            sh 'bazel build //src/frontend:bundle_prod'
          }
        }
        stage('b') {
          steps {
            sh 'bazel build //src/backend:ts_server'
          }
        }
      }
    }
  }
}