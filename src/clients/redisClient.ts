import * as redis from 'redis';

const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
  },
  disableOfflineQueue: true,
});

redisClient.on('error', (err) => console.log('client error', err));

(async () => {
  try {
    await redisClient.connect();
  } catch (e) {
    console.log(e);
  }
})();

export default redisClient;
