const Router = require('@koa/router');
const wechat = require('./wechat');
const router = new Router();
router.use('/wechat', wechat.routes());
module.exports = router;
