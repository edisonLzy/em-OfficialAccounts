pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        echo '${env}'
        checkout([$class: 'GitSCM',
        branches: [[name: env.GIT_BUILD_REF]],
        userRemoteConfigs: [[
          url: env.GIT_REPO_URL,
          credentialsId: env.CREDENTIALS_ID
        ]]])
        }
      }
      stage('查看文件') {
        steps {
          echo '查看文件'
          sh 'ls -sahl'
          sh 'du -sh *'
        }
      }
      stage('构建 Docker 镜像') {
        steps {
          echo '查看镜像文件'
          sh 'cat -n docker-compose'
          echo '构建镜像'
          sh "docker-compose up"
          echo '查看镜像列表'
          sh 'docker ps'
        }
      }
    }
  }