import morgan from 'morgan';
import logger from '../services/logger.service';
import config from '@/config';

const stream = {
  write: (message: string) => logger.http(message.trim()),
};

const skip = () => {
  return config.nodeEnv !== 'development';
};

export const requestLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);
