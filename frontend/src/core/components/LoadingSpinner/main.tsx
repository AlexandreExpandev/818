/**
 * @component LoadingSpinner
 * @summary A simple, centered loading spinner for indicating loading states.
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = () => {
  return (
    <div className="flex h-full min-h-48 w-full items-center justify-center">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
