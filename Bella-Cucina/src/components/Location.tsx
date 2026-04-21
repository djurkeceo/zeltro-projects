import { motion } from 'framer-motion';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Dove Siamo</h2>
        <div className="location-container">
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.8396796464!2d12.476442676579203!3d41.90150937123985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f605058f40751%3A0xc47e3077755e6488!2sPantheon!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-info">
            <motion.div
              className="info-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h3>Address</h3>
              <p>Piazza della Rotonda, 00186<br />Rome, Italy</p>
            </motion.div>
            <motion.div
              className="info-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              viewport={{ once: true }}
            >
              <h3>Opening Hours</h3>
              <p>Mon - Fri: 18:00 - 23:30<br />Sat - Sun: 18:00 - 00:00</p>
            </motion.div>
            <motion.div
              className="info-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.19 }}
              viewport={{ once: true }}
            >
              <h3>Contact</h3>
              <p>Phone: +39 06 123 4567<br />Email: ciao@bellacucina.it</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
