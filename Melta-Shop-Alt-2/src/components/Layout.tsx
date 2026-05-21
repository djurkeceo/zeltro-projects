import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import AnimatedOutlet from './AnimatedOutlet';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
}
