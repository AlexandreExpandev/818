import { Link } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary A page displayed when a route is not found (404).
 * @domain core
 * @type page-component
 * @category error-handling
 */
export const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-xl text-gray-600">Page Not Found</p>
      <p className="mt-4 text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
};
