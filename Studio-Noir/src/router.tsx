import React from 'react';
import { createBrowserRouter, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

const RouteErrorBoundary: React.FC = () => {
  const error = useRouteError();
  let message = 'Došlo je do neočekivane greške.';

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error && error.message) {
    message = error.message;
  }

  return (
    <div className="page-loader">
      <div style={{ textAlign: 'center', color: 'var(--white)', padding: '0 20px' }}>
        <h2 style={{ marginBottom: '12px' }}>Greška pri učitavanju stranice</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
    ],
  },
]);
