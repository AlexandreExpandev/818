import React from 'react';
import { useGreeting } from '@/domain/greeting';
import { LoadingSpinner } from '@/core/components';

/**
 * @page HomePage
 * @summary The main page of the application that displays the 'Hello World' message fetched from the backend.
 * @domain greeting
 * @type page-component
 * @category public
 *
 * @data
 * - Sources: /api/greeting
 * - Loading: Displays a loading spinner while fetching.
 * - Caching: Handled by TanStack Query.
 */
export const HomePage = () => {
  const { data, isLoading, error } = useGreeting();

  // Loading State
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Error State
  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center text-red-600"
        role="alert"
      >
        <h1 className="text-2xl font-semibold">Error</h1>
        <p className="mt-2">Could not fetch the greeting message.</p>
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      </div>
    );
  }

  // Success State
  // The parent RootLayout provides the centering container.
  // This component just needs to render the styled message.
  const textStyles: React.CSSProperties = {
    // Use system-ui stack for "System Default" for better cross-browser support
    fontFamily: data?.font.family === 'System Default' ? 'system-ui, sans-serif' : data?.font.family,
    fontSize: data?.font.size,
    color: data?.font.color,
  };

  return (
    <div className="text-center">
      {data ? (
        <h1 style={textStyles} className="font-bold">
          {data.message}
        </h1>
      ) : null}
    </div>
  );
};
