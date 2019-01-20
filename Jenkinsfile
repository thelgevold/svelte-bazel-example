pipeline {
  environment {
    registry = 'thelgevold/syntaxsuccess-svelte-samples'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/thelgevold/svelte-bazel-example.git'
      }
    }
    stage('Yarn Install') {
      steps {
        sh 'yarn'
      }
    }
    stage('Build') {
      parallel {
        stage('frontend') {
          steps {
            sh 'bazel build //src/frontend:bundle_prod'
          }
        }
        stage('backend') {
          steps {
            sh 'bazel build //src/backend:ts_server'
          }
        }
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove image') {
      steps{
        sh 'docker rmi $registry:$BUILD_NUMBER'
      }
    }
  }
}
