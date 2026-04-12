pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(['ec2-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@65.0.204.151 << 'EOF'

                    export PATH=$PATH:/usr/bin:/usr/local/bin

                    if [ ! -d backend-aws-testing ]; then
                      git clone https://github.com/OMzaiswal/backend-aws-testing.git
                    fi

                    cd backend-aws-testing
                    git pull

                    npm install

                    pm2 restart app || pm2 start index.js --name app

                    EOF
                    '''
                }
            }
        }
    }
}
