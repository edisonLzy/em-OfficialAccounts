const path = require('path');

exports.serverConfig = {
  port: 3000,
  static: path.resolve(process.cwd(), 'public'),
};

exports.wechatConfig = {
  token: process.env.WECHAT_token,
  appid: process.env.WECHAT_appid,
  appSecret: process.env.WECHAT_appSecret,
  tokenKey: 'wechatToken',
};

exports.redisConfig = {
  port: '6379',
};
