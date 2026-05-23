import { lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const GradjevinskaLimarija = lazy(() => import('./pages/GradjevinskaLimarija'));
const ProfilisaniLimovi = lazy(() => import('./pages/ProfilisaniLimovi'));
const Metalurgija = lazy(() => import('./pages/Metalurgija'));
const SendvicPaneli = lazy(() => import('./pages/SendvicPaneli'));
const Usluge = lazy(() => import('./pages/Usluge'));
const Vesti = lazy(() => import('./pages/Vesti'));
const Kontakt = lazy(() => import('./pages/Kontakt'));

function suspense(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'o-nama', element: suspense(<About />) },
      { path: 'proizvodi/gradjevinska-limarija', element: suspense(<GradjevinskaLimarija />) },
      { path: 'proizvodi/profilisani-limovi', element: suspense(<ProfilisaniLimovi />) },
      { path: 'metalurgija', element: suspense(<Metalurgija />) },
      { path: 'sendvic-paneli', element: suspense(<SendvicPaneli />) },
      { path: 'usluge', element: suspense(<Usluge />) },
      { path: 'vesti', element: suspense(<Vesti />) },
      { path: 'kontakt', element: suspense(<Kontakt />) },
    ],
  },
]);
