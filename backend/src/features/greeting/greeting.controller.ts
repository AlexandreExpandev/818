import { Request, Response } from 'express';
import { GreetingService } from './greeting.service';

export class GreetingController {
  private greetingService: GreetingService;

  constructor() {
    this.greetingService = new GreetingService();
  }

  /**
   * @route GET /api/greeting
   * @description Retrieves the static greeting message and its display properties.
   * @returns {GreetingResponse} 200 - An object containing the message and styling info.
   */
  public getGreeting = (req: Request, res: Response): void => {
    const data = this.greetingService.getGreetingData();
    res.status(200).json(data);
  };
}
