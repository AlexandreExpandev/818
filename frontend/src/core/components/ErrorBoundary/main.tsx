import React, { Component, ErrorInfo, ReactNode } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * @component ErrorBoundary
 * @summary A React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI.
 * @domain core
 * @type utility-component
 * @category error-handling
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // You can also log the error to an error reporting service here
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex h-screen flex-col items-center justify-center bg-red-50 text-red-800"
          role="alert"
        >
          <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
          <p className="mt-2">We're sorry for the inconvenience.</p>
          <button
            className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
