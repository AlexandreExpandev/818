/**
 * @module greeting
 * @summary Manages the retrieval and display of the 'Hello World' greeting message.
 * @domain functional
 * @dependencies @tanstack/react-query
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks';

// Domain public exports - Services
export * from './services';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'greeting',
  domain: 'functional',
  version: '1.0.0',
  publicHooks: ['useGreeting'],
  publicServices: ['greetingService'],
  dependencies: {
    internal: ['@/core/lib/queryClient'],
    external: ['@tanstack/react-query'],
    domains: [],
  },
  exports: {
    hooks: ['useGreeting'],
    services: ['greetingService'],
    types: ['GreetingResponse'],
  },
} as const;
