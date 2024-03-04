pipeline {
    agent any
    def timestamp = new Date().format("yyyyMMddHHmmss")
    def imageTag = "genesys:${timestamp}"

    stages {
    stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build . -t ${imageTag}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker stop genesys_container || true'
                    // Run the Docker container
                    sh "docker run -d --rm -p 5008:5008 --name genesys_container ${imageTag}"
                }
            }
        }
    }
}
