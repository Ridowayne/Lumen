const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
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
