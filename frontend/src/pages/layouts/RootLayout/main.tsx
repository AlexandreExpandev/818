import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary The main layout for the application, containing the header, footer, and main content area.
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header can be added here */}
      <header className="w-full bg-white p-4 shadow-sm">
        <nav className="mx-auto max-w-7xl">
          <p className="text-xl font-bold text-gray-800">Hello Word</p>
        </nav>
      </header>

      <main className="flex flex-grow items-center justify-center p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      {/* Footer can be added here */}
      <footer className="w-full bg-gray-100 p-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Hello Word Project. All rights reserved.</p>
      </footer>
    </div>
  );
};
