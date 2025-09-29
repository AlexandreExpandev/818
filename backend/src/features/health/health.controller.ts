import { Request, Response } from 'express';

export class HealthController {
  public check = (req: Request, res: Response): void => {
    res.status(200).json({
      status: 'UP',
      timestamp: new Date().toISOString(),
    });
  };
}
