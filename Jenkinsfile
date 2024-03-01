pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build . -t genesys'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run -d -p 5000:5000 genesys'
                }
            }
        }
    }
}
