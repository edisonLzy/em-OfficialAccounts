const Redis = require('ioredis');
const { redisConfig } = require('../config');
const redis = new Redis({
  host: redisConfig.host,
  port: redisConfig.port,
});

exports.redis = redis;
