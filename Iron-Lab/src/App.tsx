import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <section id="programs">
          <Programs />
        </section>
        <section id="trainers">
          <Trainers />
        </section>
        <section id="pricing">
          <Membership />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
