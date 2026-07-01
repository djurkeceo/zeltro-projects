import { motion, type Variants } from 'framer-motion';

const services = [
  {
    icon: '⚡',
    title: 'Elektroinstalacije',
    description: 'Slabe i jake struje, izvođenje svih vrsta elektroinstalacija',
  },
  {
    icon: '🔌',
    title: 'Konektori i osigurači',
    description: 'Postavljanje i zamena prekidača, utičnica i osigurača',
  },
  {
    icon: '💡',
    title: 'Rasveta & LED',
    description: 'Postavljanje i zamena rasvete, LED program',
  },
  {
    icon: '🔔',
    title: 'Interfoni',
    description: 'Instalacija i servis interfonskih sistema',
  },
  {
    icon: '📹',
    title: 'Video nadzor',
    description: 'Ugradnja sistema video nadzora',
  },
  {
    icon: '🏠',
    title: 'Pametne kuće',
    description: 'Smart home sistemi i automatizacija',
  },
  {
    icon: '⛈️',
    title: 'Gromobransko',
    description: 'Gromobranska instalacija i zaštita',
  },
  {
    icon: '🔧',
    title: 'Novi priključak',
    description: 'Priključak za struju od nule',
  },
  {
    icon: '🧗',
    title: 'Visinski radovi',
    description: 'Radovi na visini',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const Services = () => {
  return (
    <section id="usluge" className="py-24 bg-brand-surface1 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-white mb-4 tracking-wide uppercase"
          >
            Šta <span className="text-brand-gold">Radimo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-sec text-lg max-w-2xl mx-auto"
          >
            Sve vrste elektroinstalacionih radova
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-brand-surface2 p-8 rounded-lg border border-white/5 hover:border-brand-gold transition-all duration-300 group shadow-lg"
            >
              <div className="text-4xl mb-6 bg-brand-black w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-gold group-hover:shadow-[0_0_15px_rgba(245,166,35,0.3)] transition-all">
                <span className="group-hover:scale-110 transition-transform">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-heading tracking-wide text-brand-white mb-3 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-text-sec leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
