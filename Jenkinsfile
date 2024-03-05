pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    // Delete previous Docker container
                    sh 'docker compose down || true'
                    // sh "docker run -d --rm -p 5008:5008 --name genesys_container ${imageTag}"
                    sh "docker compose up -d NODE_ENV=production"
                }
            }
        }
    }
}
