pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Delete previous Docker image
                    sh 'docker rmi genesys || true'
                    // Build the Docker image
                    sh 'docker build . -t genesys'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker rm genesys || true'
                    // Run the Docker container
                    sh 'docker run -d -p 5008:5008 genesys'
                }
            }
        }
    }
}
