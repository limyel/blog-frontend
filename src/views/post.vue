<template>
  <div>
    <h1 class="title">
      Python 从入门到入土
    </h1>

    <div class="info">
      <div class="create_time">
        2022.4.26
      </div>
      <div class="tags">
        <div class="tag">
          <router-link to="to">Python</router-link>
        </div>
        <div class="tag">
          <router-link to="to">Python</router-link>
        </div>
      </div>
    </div>

    <v-md-preview :text="s" class="content"></v-md-preview>
  </div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      s: "## 安装 Redis\n" +
          "\n" +
          "拉取镜像：\n" +
          "\n" +
          "```bash\n" +
          "docker pull redis\n" +
          "```\n" +
          "\n" +
          "准备 redis 配置文件，先从 redis 官网下载一个 redis 配置文件\n" +
          "\n" +
          "```bash\n" +
          "wget http://download.redis.io/redis-stable/redis.conf\n" +
          "```\n" +
          "\n" +
          "修改 redis 配置文件：\n" +
          "\n" +
          "```bash\n" +
          "bind 127.0.0.1 # 注释掉这部分，使redis可以外部访问\n" +
          "daemonize no # 用守护线程的方式启动\n" +
          "requirepass 你的密码 # 给redis设置密码\n" +
          "appendonly yes # redis持久化　　默认是no\n" +
          "tcp-keepalive 300 # 防止出现远程主机强迫关闭了一个现有的连接的错误 默认是300\n" +
          "logfile \"/data/redis.log\" # 存放日志文件\n" +
          "dir /data # 存放持久化文件\n" +
          "```\n" +
          "\n" +
          "接下来创建本地与 docker 映射的目录，即本地存放目录，将配置文件拷贝到该目录。\n" +
          "\n" +
          "```bash\n" +
          "sudo mkdir /usr/local/docker/redis\n" +
          "sudo mkdir /usr/local/docker/redis/data\n" +
          "sudo mv /tmp/redis.conf /usr/local/docker/redis\n" +
          "sudo touch /usr/local/docker/redis/data/redis.log # 日志文件\n" +
          "```\n" +
          "\n" +
          "启动\n" +
          "\n" +
          "```bash\n" +
          "docker run -itd -p 6379:6379 --name redis -v /usr/local/docker/redis/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/redis/data:/data redis redis-server /etc/redis/redis.conf\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "## 安装 Elasticsearch\n" +
          "\n" +
          "拉取指定版本的镜像：\n" +
          "\n" +
          "```bash\n" +
          "docker pull elasticsearch:7.1\n" +
          "```\n" +
          "\n" +
          "运行：\n" +
          "\n" +
          "```\n" +
          "docker run -d -p 9200:9200 -p 9300:9300 -e \"discovery.type=single-node\" -e ES_JAVA_OPTS=\"-Xms64m -Xmx256m\" --name es elasticsearch:7.6.2\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "## 安装 RabbitMQ\n" +
          "\n" +
          "拉取镜像\n" +
          "\n" +
          "```\n" +
          "docker pull rabbitmq\n" +
          "```\n" +
          "\n" +
          "运行\n" +
          "\n" +
          "```\n" +
          "docker run -itd --name rabbitmq -p 15672:15672 -p 5672:5672 rabbitmq\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "## 安装 MongoDB\n" +
          "\n" +
          "拉取镜像：\n" +
          "\n" +
          "```\n" +
          "docker pull mongo\n" +
          "```\n" +
          "\n" +
          "运行：\n" +
          "\n" +
          "```bash\n" +
          "docker run -d -p 27017:27017 -v /usr/local/docker/mconfigdb:/data/configdb -v /usr/local/docker/mongo/db:/data/db --name mongo mongo\n" +
          "```\n" +
          "\n" +
          "如果要以认证模式运行，在最后加上 ` --auth`。运行，进入容器：\n" +
          "\n" +
          "```bash\n" +
          "docker exec -it mongo mongo admin\n" +
          "```\n" +
          "\n" +
          "创建用户名和密码：\n" +
          "\n" +
          "```bash\n" +
          "db.createUser({ user: 'mongo', pwd: '123456', roles: [{ role: \"userAdminAnyDatabase\", db: \"admin\" }]});\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "## 安装 MySQL\n" +
          "\n" +
          "拉取镜像：\n" +
          "\n" +
          "```bash\n" +
          "docker pull mysql\n" +
          "```\n" +
          "\n" +
          "新建需要映射的目录，运行：\n" +
          "\n" +
          "```\n" +
          "docker run -p 3306:3306 --name mysql \\\n" +
          "-v /usr/local/docker/mysql/conf:/etc/mysql \\\n" +
          "-v /usr/local/docker/mysql/logs:/var/log/mysql \\\n" +
          "-v /usr/local/docker/mysql/data:/var/lib/mysql-files \\\n" +
          "-e MYSQL_ROOT_PASSWORD=123456 \\\n" +
          "-id mysql\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n"
    }
  }
}
</script>

<style scoped>

.title {
  margin: 35px 0;
}

.info {
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  line-height: 1.6rem;
}
.tags {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: right;
}
.tag {
  padding: 0.4rem;
  font-size: 0.8rem;
  line-height: 100%;
  margin-left: 10px;
  border: 2px solid #000000;
  border-radius: 5px;
}
.content {
  width: 100%;
}

</style>