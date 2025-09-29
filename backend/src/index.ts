import 'dotenv/config';
import app from './app';
import config from './config';
import logger from './core/services/logger.service';

const server = app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port} in ${config.nodeEnv} mode`);
});

// Graceful Shutdown
const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];

signals.forEach((signal) => {
  process.on(signal, () => {
    logger.info(`Received ${signal}, shutting down gracefully...`);
    server.close(() => {
      logger.info('Server closed.');
      // Add any cleanup logic here (e.g., close database connections)
      process.exit(0);
    });
  });
});
