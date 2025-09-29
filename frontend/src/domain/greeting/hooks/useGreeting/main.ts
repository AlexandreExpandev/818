import { useQuery } from '@tanstack/react-query';
import { greetingService } from '../../services';
import type { UseGreetingReturn } from './types';

const GREETING_QUERY_KEY = ['greeting'];

/**
 * @hook useGreeting
 * @summary Fetches the 'Hello World' greeting message from the service.
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
  } = useQuery({
    queryKey: GREETING_QUERY_KEY,
    queryFn: greetingService.getGreeting,
  });

  return {
    message: data?.message,
    isLoading,
    error,
    isSuccess,
  };
};
