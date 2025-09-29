import { useQuery } from '@tanstack/react-query';
import { greetingService } from '../../services';
import type { UseGreetingReturn } from './types';
import { GreetingResponse } from '../../types';

const GREETING_QUERY_KEY = ['greeting'];

/**
 * @hook useGreeting
 * @summary Fetches the 'Hello World' greeting data from the API.
 * @domain greeting
 * @type domain-hook
 * @category data
 * @returns {UseGreetingReturn} The state of the greeting query.
 */
export const useGreeting = (): UseGreetingReturn => {
  const {
    data,
    isLoading,
    error,
    isSuccess,
  } = useQuery<GreetingResponse, Error>({
    queryKey: GREETING_QUERY_KEY,
    queryFn: greetingService.getGreeting,
  });

  return {
    data,
    isLoading,
    error,
    isSuccess,
  };
};
