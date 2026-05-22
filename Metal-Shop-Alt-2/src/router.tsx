import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import GradjevinskaLimarija from './pages/GradjevinskaLimarija';
import ProfilisaniLimovi from './pages/ProfilisaniLimovi';
import Metalurgija from './pages/Metalurgija';
import SendvicPaneli from './pages/SendvicPaneli';
import Usluge from './pages/Usluge';
import Vesti from './pages/Vesti';
import Kontakt from './pages/Kontakt';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'o-nama', element: <About /> },
      { path: 'proizvodi/gradjevinska-limarija', element: <GradjevinskaLimarija /> },
      { path: 'proizvodi/profilisani-limovi', element: <ProfilisaniLimovi /> },
      { path: 'metalurgija', element: <Metalurgija /> },
      { path: 'sendvic-paneli', element: <SendvicPaneli /> },
      { path: 'usluge', element: <Usluge /> },
      { path: 'vesti', element: <Vesti /> },
      { path: 'kontakt', element: <Kontakt /> },
    ],
  },
]);
