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
    success { echo 'Tests passed' }
    failure { echo 'Tests failed' }
  }
}