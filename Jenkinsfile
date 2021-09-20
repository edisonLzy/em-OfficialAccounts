node() {
    stage('拉取代码') {
        checkout scm
    }

    stage('查看文件') {
          echo '查看文件'
          sh 'ls -sahl'
          sh 'du -sh *'
    }
    stage('构建镜像') {
         sh 'docker-compose up'
    } 
}