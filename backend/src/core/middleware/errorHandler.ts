import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/http-exception';
import logger from '../services/logger.service';

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    logger.warn(`HTTP Exception: ${err.status} ${err.message} - URL: ${req.originalUrl} - Method: ${req.method}`);
    return res.status(err.status).json({ 
      status: 'error',
      statusCode: err.status,
      message: err.message 
    });
  }

  logger.error(`Internal Server Error: ${err.message}`, { 
    stack: err.stack, 
    url: req.originalUrl, 
    method: req.method 
  });

  return res.status(500).json({ 
    status: 'error',
    statusCode: 500,
    message: 'An unexpected internal server error occurred.' 
  });
};
