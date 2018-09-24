pipeline {
  agent {
    docker {
      filename 'Dockerfile'
      dir 'build'
      // label 'my-label'
      // additonalBuildArgs ''
    }
  }
  parameters {
    // string(name: 'dev', defaultValue: 'xxxx', description: 'local server')
    // string(name: 'staging', defaultValue: 'xxxx', description: 'staging server')
    string(name: 'prod', defaultValue: 'xxxx', description: 'remote production server')
  }
  triggers {
    pollSCM('0****')
  }
  stages {
    stage('Build') {
      steps {
        // sh 'npm install && npm run build && pm2 restart'
      }
    }
    stage ('Deploy') {
      steps {
        sh "ssh root@${params.prod}"
      }
    }
  }
}



pipeline {
  agent any
  // parameters {
  //   // string(name: 'dev', defaultValue: 'xxxx', description: 'local server')
  //   // string(name: 'staging', defaultValue: 'xxxx', description: 'staging server')
  //   string(name: 'prod', defaultValue: 'xxxx', description: 'remote production server')
  // }
  // triggers {
  //   pollSCM('0****')
  // }
  stages {
    stage('Build') {
      steps {
        "docker build . -t app:${env.BUILD_ID}"
      }
    }
    stage ('Deploy') {
      steps {
        sh "ssh root@${params.prod}"
      }
    }
  }
}
