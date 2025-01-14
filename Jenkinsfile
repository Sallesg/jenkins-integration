pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin/pnpm:$PATH"  
    }

    stages {
        stage('Check Node and NPM') {
            steps {
                script {
                    
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Install pnpm') {
            steps {
                script {
                    
                    sh 'curl -fsSL https://get.pnpm.io/install.sh | bash -'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'pnpm -v'  
                    sh 'pnpm install'  
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'pnpm test'  
                }
            }
        }

        stage('Feedback') {
            steps {
                echo 'Tests completed!'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the test results.'
        }
    }
}
