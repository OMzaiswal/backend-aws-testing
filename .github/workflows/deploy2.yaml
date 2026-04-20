name: Docker Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to EC2
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            if [ ! -d ~/backend-docker ]; then
              git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git ~/backend-docker
            fi

            cd ~/backend-docker

            git pull origin main

            docker build -t backend-app .

            docker stop backend-container || true
            docker rm backend-container || true

            docker run -d -p 3000:3000 --name backend-container backend-app