import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 3, suffix: '+', label: 'Godine iskustva' },
  { value: 24, suffix: 'h', label: 'Brza intervencija' },
  { value: 100, suffix: '%', label: 'Mogućnost plaćanja računom' },
  { value: 1, suffix: ' grad', label: 'Subotica i okolina' },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}</span>;
};

const WhyUs = () => {
  return (
    <section className="bg-brand-black border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-12 px-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-gold mb-2 drop-shadow-[0_0_10px_rgba(245,166,35,0.2)]">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-brand-white font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
