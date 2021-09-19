const Router = require('@koa/router');
const axios = require('axios');
const wechat = require('co-wechat');
const WechatAPI = require('co-wechat-api');
const { redis } = require('../db/redis');
const { wechatConfig } = require('../config');
const router = new Router();

const api = new WechatAPI(
  wechatConfig.appid,
  wechatConfig.appSecret,
  async function () {
    const res = await redis.get(wechatConfig.tokenKey);
    return JSON.parse(res);
  },
  function (token) {
    redis.set(wechatConfig.tokenKey, JSON.stringify(token));
  }
);

router.all(
  '/',
  wechat(wechatConfig).middleware(async (message) => {
    console.log(message);
    return 'x';
  })
);

router.get('/getFollowers', async (ctx) => {
  let list = await api.getFollowers();
  ctx.body = list;
});

module.exports = router;
