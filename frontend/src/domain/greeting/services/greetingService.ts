import { GreetingResponse } from '../types';

/**
 * @service greetingService
 * @summary A mock service to provide the greeting message.
 * @domain greeting
 * @type data-service
 */
const getGreeting = (): Promise<GreetingResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Hello Word' });
    }, 500); // Simulate network delay
  });
};

export const greetingService = {
  getGreeting,
};
