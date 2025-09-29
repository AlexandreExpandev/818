import { GreetingResponse } from './greeting.types';

export class GreetingService {
  /**
   * @summary Provides the static greeting data as defined in the feature specification.
   * @description This method encapsulates the business logic for the greeting feature,
   * which is to return a hardcoded message and its associated styling information.
   * Corresponds to business rules BR-001, BR-002, and BR-003.
   * @returns {GreetingResponse} The structured greeting data.
   */
  public getGreetingData(): GreetingResponse {
    return {
      message: 'Hello World',
      alignment: 'center',
      font: {
        family: 'System Default',
        size: '16pt',
        color: '#000000',
      },
    };
  }
}
