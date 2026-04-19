import { motion } from 'framer-motion';
import './Reservation.css';

const Reservation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Reservation Submitted:', Object.fromEntries(formData));
    alert('Thank you! Your reservation request has been received.');
  };

  const timeSlots = [];
  for (let hour = 18; hour <= 23; hour++) {
    timeSlots.push(`${hour}:00`);
    if (hour < 23) timeSlots.push(`${hour}:30`);
  }

  return (
    <section id="reservation" className="reservation">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Prenota un Tavolo</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="date" name="date" required />
          </div>
          <div className="form-group">
            <select name="time" required defaultValue="">
              <option value="" disabled>Select Time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <input type="number" name="guests" min="1" max="10" placeholder="Guests (1-10)" required />
          </div>
          <textarea name="requests" placeholder="Special Requests (Optional)" rows={4}></textarea>
          <button type="submit" className="btn btn-primary submit-btn">Confirm Reservation</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Reservation;
