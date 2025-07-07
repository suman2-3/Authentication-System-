const { rateLimit } = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  // message: 'Too many login attemps. please try again later',
  message: async (req, res) => {
    return {
      status: 'error',
      message: `Too many login attempts from this IP, please try again later`,
      timestamp: new Date().toISOString(),
      remainingTime: Math.ceil(
        (15 * 60 * 1000 - (Date.now() % (15 * 60 * 1000))) / 1000
      ),
    };
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginLimiter;
