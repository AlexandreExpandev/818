export interface UseGreetingReturn {
  message: string | undefined;
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean;
}
