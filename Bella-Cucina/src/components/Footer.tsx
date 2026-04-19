import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Bella Cucina</h2>
          <p>Authentic Italian flavors, served with love in the heart of Rome.</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bella Cucina. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
