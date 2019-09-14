受[nestjs-realworld-example-app](https://github.com/lujakob/nestjs-realworld-example-app)和[nestjsx/crud](https://github.com/nestjsx/crud)启发写成的通用后台管理增删改查系统。

# 如何开始

### 1. 起一个mysql数据库服务。将数据库相关的配置改`ormconfig.json`（复制或重命名`ormconfig.json.example`文件)文件对应项。

比如，用docker启动mysql服务：

```bash
mkdir data
docker run --name mysql -p 3306:3306 -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=domsgit -d mysql:5.6
```

**注意**：mysql高版本的貌似typeorm相关的依赖包会报错。

### 2. 下载本项目及项目依赖包。

```bash
git clone https://github.com/domsgit/nestjs-crud your-project-name
cd your-project-name
yarn
# npm install
```

### 3. 设置你的token秘钥，复制或重命名`src/config.ts.example`，改成你自己的SECRET。


### 4. 启动

```bash
yarn start:watch
# npm run start:watch
```

# 访问地址

1. Swagger Api地址： [http://localhost:3000/docs](http://localhost:3000/docs)
2. api地址前缀：[http://localhost:3000/api](http://localhost:3000/api)
