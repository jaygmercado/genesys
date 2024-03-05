pipeline {
    agent any

    stages {
        stage('Stop and Delete Container') {
            steps {
                script {
                    sh 'docker compose down || true'
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
