pipeline {
    agent any
    environment {
        TIMESTAMP = new Date().format("yyyyMMddHHmmss")
    }

    stages {
        stage('Build') {
            steps {
                script {
                    def imageTag = "genesys:${TIMESTAMP}"
                    // Build the Docker image
                    sh "docker build . -t ${imageTag}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker compose down || true'
                    // Run the Docker container.
                    def imageTag = "genesys:${TIMESTAMP}"
                    sh "docker run -d --rm -p 5008:5008 --name genesys_container ${imageTag}"
                }
            }
        }
    }
}
