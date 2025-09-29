import { GreetingResponse } from '../types';

/**
 * @service greetingService
 * @summary Service to fetch the greeting message from the backend API.
 * @domain greeting
 * @type api-service
 */
const getGreeting = async (): Promise<GreetingResponse> => {
  // The request is proxied by Vite's dev server to the backend on port 3001.
  const response = await fetch('/api/greeting');

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Network response was not ok' }));
    throw new Error(errorData.message || 'Failed to fetch greeting');
  }

  const data: GreetingResponse = await response.json();
  return data;
};

export const greetingService = {
  getGreeting,
};
