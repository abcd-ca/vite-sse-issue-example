const express = require('express');
const { createChannel, createSession } = require('better-sse');

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

const ticker = createChannel();
let count = 0;
setInterval(() => {
  // eslint-disable-next-line no-plusplus
  ticker.broadcast(count++, 'tick');
}, 1000);
const broadcastSessionCount = () => {
  ticker.broadcast(ticker.sessionCount, 'session-count');
};
ticker
  .on('session-registered', broadcastSessionCount)
  .on('session-deregistered', () => {
    console.log(`*** session-deregistered`);
    broadcastSessionCount();
  });

router.get('/streaming', async (req, res) => {
  try {
    const session = await createSession(req, res);
    ticker.register(session);

    session.push(JSON.stringify({ num: Date.now() }));
  } catch (error) {
    console.log(`***  error: `, error);
  }
});

module.exports = router;
