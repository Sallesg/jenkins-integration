pipeline {
    agent any

    stages {
        stage('enable corepack') {
            steps {
                script {
                    sh 'corepack enable pnpm'
                }
            }
        }

        stage('Install pnpm') {
            steps {
                script {
                    sh 'npm i pnpm --global'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
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
