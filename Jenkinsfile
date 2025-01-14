pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin/pnpm:$PATH"  
    }

    stages {

        stage('Install pnpm') {
            steps {
                script {
                    sh 'npm install -g pnpm'
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
