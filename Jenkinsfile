pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build . -t genesys:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker stop genesys_container || true'
                    // Run the Docker container
                    sh 'docker run -d --rm -p 5008:5008 genesys_container'
                }
            }
        }
    }
}
