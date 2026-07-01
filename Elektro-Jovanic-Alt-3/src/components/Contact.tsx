import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontakt" className="py-24 bg-brand-surface1 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-white mb-4 tracking-wide uppercase"
          >
            Kontaktirajte <span className="text-brand-gold">Nas</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <a href="tel:0658275055" className="bg-brand-surface2 p-6 rounded-lg border border-white/5 hover:border-brand-gold transition-all group flex items-start gap-4">
              <div className="bg-brand-black w-12 h-12 rounded flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h4 className="text-brand-text-sec text-sm uppercase tracking-wider mb-1">Telefon</h4>
                <p className="text-brand-white text-xl font-medium group-hover:text-brand-gold transition-colors">065 / 827-5055</p>
              </div>
            </a>
            
            <a href="mailto:positivevoltage24@gmail.com" className="bg-brand-surface2 p-6 rounded-lg border border-white/5 hover:border-brand-gold transition-all group flex items-start gap-4">
              <div className="bg-brand-black w-12 h-12 rounded flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-brand-text-sec text-sm uppercase tracking-wider mb-1">Email adresa</h4>
                <p className="text-brand-white text-lg font-medium group-hover:text-brand-gold transition-colors break-all">positivevoltage24@gmail.com</p>
              </div>
            </a>
            
            <div className="bg-brand-surface2 p-6 rounded-lg border border-white/5 flex items-start gap-4">
              <div className="bg-brand-black w-12 h-12 rounded flex items-center justify-center text-brand-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="text-brand-text-sec text-sm uppercase tracking-wider mb-1">Adresa</h4>
                <p className="text-brand-white text-lg font-medium">Majšanski put 134A<br/>24000 Subotica</p>
              </div>
            </div>

            <a
              href="tel:0658275055"
              className="mt-4 bg-brand-gold hover:bg-yellow-500 text-brand-black px-8 py-4 rounded font-bold text-lg text-center transition-all hover:scale-105 flex items-center justify-center uppercase tracking-wider shadow-[0_0_20px_rgba(245,166,35,0.3)]"
            >
              Pozovite odmah
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-brand-black p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/95 rounded-xl z-20"
              >
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-heading text-brand-white mb-2">Poruka Poslata!</h3>
                <p className="text-brand-text-sec text-center px-6">Hvala na interesovanju. Kontaktiraćemo vas u najkraćem mogućem roku.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="font-heading text-2xl text-brand-white tracking-wider mb-2">Pošaljite upit</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-brand-text-sec text-sm uppercase tracking-wide">Ime i prezime</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-brand-surface1 border border-white/10 rounded px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Vaše ime"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="contact" className="text-brand-text-sec text-sm uppercase tracking-wide">Telefon ili Email</label>
                <input 
                  type="text" 
                  id="contact" 
                  required
                  className="bg-brand-surface1 border border-white/10 rounded px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Kako da vas kontaktiramo?"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-brand-text-sec text-sm uppercase tracking-wide">Poruka</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="bg-brand-surface1 border border-white/10 rounded px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="Opišite šta vam je potrebno..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-brand-gold hover:bg-yellow-500 text-brand-black px-6 py-4 rounded font-bold uppercase tracking-wider transition-all hover:-translate-y-1 mt-2"
              >
                Pošalji poruku
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
