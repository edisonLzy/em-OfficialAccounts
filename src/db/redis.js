const Redis = require('ioredis');
const { redisConfig } = require('../config');
const redis = new Redis({
  port: redisConfig.port,
});

exports.redis = redis;
