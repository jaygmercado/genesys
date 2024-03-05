pipeline {
    agent any

    stages {
        stage('Stop and Delete Container') {
            steps {
                script {
                    sh 'docker compose down || true'
                    sleep 10 // Add a delay of 10 seconds (adjust as needed)
                }
            }
        }

        stage('Build and Start Container') {
            steps {
                script {
                    sh "NODE_ENV=prod docker compose up -d --build"
                }
            }
        }
    }
}
