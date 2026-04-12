pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build Image') {
            steps {
                // This creates the 'package' of your Express app
                sh 'docker build -t my-backend .'
            }
        }
        stage('Deploy') {
            steps {
                // Stop old version, start new version on port 80
                sh 'docker stop express-app || true'
                sh 'docker rm express-app || true'
                sh 'docker run -d --name express-app -p 80:3000 my-backend'
            }
        }
    }
}