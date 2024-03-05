pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker compose down || true'
                    sh "NODE_ENV=prod docker-compose up -d --build"
                }
            }
        }
    }
}
