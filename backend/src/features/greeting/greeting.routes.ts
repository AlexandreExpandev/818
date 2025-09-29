import { Router } from 'express';
import { GreetingController } from './greeting.controller';

const router = Router();
const controller = new GreetingController();

// Defines the endpoint to provide the message content as per DF-002 and FC-002.
router.get('/', controller.getGreeting);

export default router;
