import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
