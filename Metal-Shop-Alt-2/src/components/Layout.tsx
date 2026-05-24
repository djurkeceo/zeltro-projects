import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AnimatedOutlet from './AnimatedOutlet';
import JsonLd from './JsonLd';
import { usePageSEO } from '../hooks/useSEO';
import './Layout.css';

export default function Layout() {
  const location = useLocation();

  usePageSEO();

  return (
    <div className="layout">
      <JsonLd />
      <ScrollToTop />
      <Navbar key={location.pathname} />
      <main id="main-content">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
}
