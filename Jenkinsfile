pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'ls'
            }
            // post {
            //     success {
            //         slackSend (color: 'good', message: "BUILD SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            //     }
            //     failure {
            //         slackSend (color: 'danger', message: "BUILD FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            //     }
            // }
        }
    //     stage('Test') {
    //         steps {
    //             sh 'mvn test'
    //         }
    //         post {
    //             always {
    //                 junit 'target/surefire-reports/*.xml'
    //             }
    //             success {
    //                 slackSend (color: 'good', message: "TEST SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //                 archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
    //             }
    //             failure {
    //                 slackSend (color: 'danger', message: "TEST FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //             }
    //         }
    //     }
    //     stage('Sonarqube') {
          
    //         steps {
    //            sh "cp -r /var/lib/jenkins/workspace/alfred/* /var/lib/jenkins/workspace/test"
              
    //         }
    //     }
    //     stage('Deliver') {
    //         steps {
    //             sh './jenkins/scripts/deliver.sh'
    //         }
    //         post {
    //             success {
    //                 slackSend (color: 'good', message: "DELIVER SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //             }
    //             failure {
    //                 slackSend (color: 'danger', message: "DELIVER FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    //             }
    //         }
    //     }
     }
}