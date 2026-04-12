pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@65.0.204.151 "
                cd backend-aws-testing || git clone https://github.com/OMzaiswal/backend-aws-testing.git && cd backend-aws-testing

                git pull
                npm install
                pm2 restart app || pm2 start index.js --name app
                "
                '''
            }
        }
    }
}
