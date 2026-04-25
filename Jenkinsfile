pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'shreyansh105/portfolio'
        // Make sure to add your Docker Hub credentials in Jenkins with this ID
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Lint & Test') {
            steps {
                // We use Node.js to run local tests/linting before building the image
                // Assuming Jenkins has Node.js installed or is using a Node container
                sh 'npm ci'
                sh 'npm run lint --if-present'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image ${DOCKER_IMAGE}:${env.BUILD_NUMBER}..."
                    // The Dockerfile uses multi-stage builds, so it will compile the React app
                    app = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Requires the Docker Pipeline plugin in Jenkins
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Placeholder for your deployment script. 
                // E.g., SSH into your production server to pull and run the new container:
                // sh "ssh user@production-server 'docker pull ${DOCKER_IMAGE}:latest && docker stop portfolio || true && docker rm portfolio || true && docker run -d -p 80:80 --name portfolio ${DOCKER_IMAGE}:latest'"
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully! The new image is available on Docker Hub.'
        }
        failure {
            echo 'Pipeline failed. Please check the Jenkins console output.'
        }
    }
}
