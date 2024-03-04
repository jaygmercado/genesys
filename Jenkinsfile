pipeline {
    agent any

    // Define timestamp outside of stages
    def timestamp

    stages {
        stage('Build') {
            steps {
                script {
                    // Set the timestamp
                    timestamp = new Date().format("yyyyMMddHHmmss")
                    def imageTag = "genesys:${timestamp}"
                    // Build the Docker image
                    sh "docker build . -t ${imageTag}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Use the same timestamp from the 'Build' stage
                    def imageTag = "genesys:${timestamp}"

                    // Delete previous Docker container
                    sh 'docker stop genesys_container || true'
                    // Run the Docker container
                    sh "docker run -d --rm -p 5008:5008 --name genesys_container ${imageTag}"
                }
            }
        }
    }
}
