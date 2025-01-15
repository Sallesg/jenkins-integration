pipeline {
    agent any

      tools {
        nodejs 'Node 23.6.0'  
    }

    stages {

      stage('Checkout Source') {
            steps {
                git url: 'https://github.com/Sallesg/jenkins-integration', branch: 'main'
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
                    sh 'pnpm test -- --ci'  
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
