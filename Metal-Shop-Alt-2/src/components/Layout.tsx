import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AnimatedOutlet from './AnimatedOutlet';
import JsonLd from './JsonLd';
import { usePageSEO } from '../hooks/useSEO';
import './Layout.css';

export default function Layout() {
  usePageSEO();

  return (
    <div className="layout">
      <JsonLd />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
}
