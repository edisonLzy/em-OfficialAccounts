const path = require('path');

// 初始化环境变量
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.local'),
});

const Koa = require('koa');
const signale = require('signale');
const static = require('koa-static');
const router = require('./route');
const { serverConfig: config } = require('./config');
// 初始化redis
require('./db/redis');
const app = new Koa();
// 静态资源
app.use(static(config.static));
// 注册路由
app.use(router.routes());

app.listen(config.port, () => {
  signale.success('server is on port:', config.port);
});

exports.app = app;
