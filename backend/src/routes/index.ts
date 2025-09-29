import { Router } from 'express';
import healthRouter from '@/features/health';
import greetingRouter from '@/features/greeting';

const mainRouter = Router();

// Foundational routes
mainRouter.use('/health', healthRouter);

// ### INTEGRATION POINT FOR NEW FEATURE MODULES ###
mainRouter.use('/greeting', greetingRouter);
// Example: mainRouter.use('/users', userRouter);
// Example: mainRouter.use('/products', productRouter);

export default mainRouter;
