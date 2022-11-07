const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.json(),
    format.printf(({ timestamp, level, message, stack }) => {
      return `[${timestamp}] ${level}: ${stack || message}`;
    })
  ),

  transports: [new transports.Console()],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.File({
      filename: 'logs/app.log',
      level: 'info',
    })
  );
  logger.add(
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
    })
  );
  logger.exceptions.handle(
    new transports.File({
      filename: 'logs/exceptions.log',
      level: 'error',
    })
  );
  logger.rejections.handle(
    new transports.File({
      filename: 'logs/rejections.log',
      level: 'error',
    })
  );
}

module.exports = logger;
