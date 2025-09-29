# Hello Word - Frontend

This is the frontend foundation for the Hello Word project, built with React, TypeScript, and Vite.

## Project Structure

The project follows a domain-driven, feature-based architecture to ensure scalability and maintainability.

- `src/app`: Core application setup (routing, providers, main entry point).
- `src/core`: Shared, reusable components, hooks, and utilities that are not tied to any specific business domain.
- `src/domain`: Contains all business logic, separated by domain. Each domain has its own components, hooks, services, and types.
- `src/pages`: Routable components that compose layouts and domain components to build a view.
- `src/assets`: Global assets like styles and fonts.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally for previewing.
