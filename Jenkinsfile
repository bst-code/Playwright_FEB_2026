pipeline {
  agent any

  environment {
    NODE_OPTIONS = '--max-old-space-size=4096'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install Node') {
      steps {
        script {
          def nodejsTool = tool name: 'NodeJS_24', type: 'nodejs'
          env.PATH = "${nodejsTool}/bin:${env.PATH}"
        }
      }
    }

    stage('Install deps') {
      steps {
        dir('Framework_UI') {
          bat 'npm ci'
        }
      }
    }

    stage('Install Playwright browsers') {
      steps {
        dir('Framework_UI') {
          bat 'npx playwright install --with-deps'
        }
      }
    }

    stage('Run tests') {
      steps {
        dir('Framework_UI') {
          bat 'npx playwright test --reporter=html'
        }

        publishHTML(target: [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'Framework_UI/playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright HTML Report'
        ])
      }
      post {
        always {
          archiveArtifacts artifacts: 'Framework_UI/playwright-report/**', allowEmptyArchive: true
          junit allowEmptyResults: true, testResults: 'Framework_UI/test-results/**/*.xml'
        }
      }
    }
  }

  post {
    success {
      echo 'Tests passed'
      emailext(
        subject: "[Jenkins] ${env.JOB_NAME} #${env.BUILD_NUMBER} SUCCESS",
        body: """<p>Build Success</p>
                <p>Job: ${env.JOB_NAME}</p>
                <p>Build: ${env.BUILD_NUMBER}</p>
                <p><a href="${env.BUILD_URL}">Open build</a></p>
                <p>Report: <a href="${env.BUILD_URL}htmlreports/Playwright+HTML+Report/">HTML report</a></p>""",
        recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
        to: 'your-real-email@example.com'
      )
    }
    failure {
      echo 'Tests failed'
      emailext(
        subject: "[Jenkins] ${env.JOB_NAME} #${env.BUILD_NUMBER} FAILED",
        body: """<p>Build Failed</p>
                <p>Job: ${env.JOB_NAME}</p>
                <p>Build: ${env.BUILD_NUMBER}</p>
                <p><a href="${env.BUILD_URL}">Open build</a></p>""",
        recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
        to: 'your-real-email@example.com'
      )
    }
    always {
      emailext(
        subject: "Playwright reports: ${currentBuild.currentResult}",
        body: "See attached report artifact. Build: ${env.BUILD_URL}",
        to: "your-real-email@example.com",
        attachmentsPattern: 'Framework_UI/playwright-report/**'
      )
    }
  }
}