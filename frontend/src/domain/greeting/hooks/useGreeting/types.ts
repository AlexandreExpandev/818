import { GreetingResponse } from '../../types';

export interface UseGreetingReturn {
  data: GreetingResponse | undefined;
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean;
}
