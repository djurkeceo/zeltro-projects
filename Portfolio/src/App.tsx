import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './router';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-logo">L · M</div>
          </div>
        }>
          <PageTransition key={location.pathname}>
            <AppRouter />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
