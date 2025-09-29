import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * @component AppProviders
 * @summary A component that wraps the entire application with necessary context providers.
 * @type utility-component
 * @category core
 */
export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
