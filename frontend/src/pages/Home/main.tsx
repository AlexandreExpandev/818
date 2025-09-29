import { useGreeting } from '@/domain/greeting';

/**
 * @page HomePage
 * @summary The main page of the application that displays the 'Hello World' message.
 * @domain greeting
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  const { message, isLoading, error } = useGreeting();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Hello Word Application
      </h1>
      <div className="mt-8 flex h-24 items-center justify-center rounded-lg bg-white p-6 shadow-md">
        {isLoading && <p className="text-lg text-gray-500">Loading...</p>}
        {error && (
          <p className="text-lg text-red-500">Error: {error.message}</p>
        )}
        {message && (
          <p className="text-3xl font-semibold text-blue-600">{message}</p>
        )}
      </div>
    </div>
  );
};
