var winston = require('winston');

module.exports = logger = new winston.Logger({
  transports: [
    new winston.transports.Console({timestamp: true}),
  ],
  exitOnError: true,
  handleExceptions: false
});
