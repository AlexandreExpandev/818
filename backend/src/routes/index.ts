import { Router } from 'express';
import healthRouter from '@/features/health';

const mainRouter = Router();

// Foundational routes
mainRouter.use('/health', healthRouter);

// ### INTEGRATION POINT FOR NEW FEATURE MODULES ###
// Example: mainRouter.use('/users', userRouter);
// Example: mainRouter.use('/products', productRouter);

export default mainRouter;
