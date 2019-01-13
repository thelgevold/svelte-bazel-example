pipeline {
    agent any

    stages {
        stage('GIT') {
            steps {
              echo 'Pulling...' + env.BRANCH_NAME
              checkout scm
            }
        }
        stage('Yarn') {
            steps {
                sh "yarn"
            }
        }
        stage('Build') {
            steps {
                parallel(
                  a: {
                    sh "bazel build //src/frontend:bundle_prod"
                  },
                  b: {
                    sh "bazel build //src/backend:ts_server"
                  }
                )
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
