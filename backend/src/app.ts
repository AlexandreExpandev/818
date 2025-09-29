import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import config from './config';
import { requestLogger } from './core/middleware/requestLogger';
import { globalErrorHandler } from './core/middleware/errorHandler';
import { HttpException } from './core/utils/http-exception';
import mainRouter from './routes';

const app: Application = express();

// Core Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logging
app.use(requestLogger);

// Rate Limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// API Routes
app.use('/api', mainRouter);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(404, 'Resource not found'));
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
