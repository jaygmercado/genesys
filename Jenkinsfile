pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    def timestamp = new Date().format("yyyyMMddHHmm")
                    def imageTag = "genesys:${timestamp}"
                    // Build the Docker image
                    sh "docker build . -t ${imageTag}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def timestamp = new Date().format("yyyyMMddHHmm")
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
