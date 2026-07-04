import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const reviews = [
  {
    name: "Orsolya B.",
    text: "I really like the gym! They have German, good quality machines, the gym and the changing rooms are clean, staff members are friendly, and it's very simple to sign up for membership.",
  },
  {
    name: "Natalia N.",
    text: "Great gym with a wide variety of equipment. The best thing about this gym is the female receptionists. They always greet you with a smile and are always ready to help.",
  },
  {
    name: "Kriszti",
    text: "I love working out here, the girls are so cute and incredibly friendly. The place is pretty good, obviously not perfect, but it's perfect for what I need.",
  },
  {
    name: "Boris D.",
    text: "Good gym. Well ventilated, not that crowded, not bad assortment of equipment. A rowing machine or two would be nice to have.",
  },
  {
    name: "Tejmur Š.",
    text: "Large and well equipped. Everyone is pleasant and kind, both the staff and the gym users. The weights are put back neatly in their place.",
  },
  {
    name: "Miloš L.",
    text: "Clean, tidy, friendly staff, good music, large selection of training equipment.",
  },
  {
    name: "Bojan L.",
    text: "Affordable prices and very flexible working hours, just great!",
  },
  {
    name: "Ani D.",
    text: "For me, the best in town. A place of good energy and positive people, and above all clean.",
  },
  {
    name: "Edina S.",
    text: "Good place despite the fact that it's small. However, the cardio ticket is quite expensive for its size, currently 3000 dinars.",
  },
  {
    name: "Emanuel P.",
    text: "Nice place, BUT NO WIFI! It should be basic. I hope it will be improved.",
  },
  {
    name: "Rita B.",
    text: "Clean gym! Friendly person! All praise!",
  },
  {
    name: "Ferenc T.",
    text: "I really liked it. Homely. Run by nice people.",
  },
  {
    name: "Ivan B.",
    text: "Ideal place for training, hygiene 5+!!!",
  },
  {
    name: "Miroslav M.",
    text: "A nicely arranged space, something for everyone who wants to be in shape.",
  },
  {
    name: "Ilija L.",
    text: "Very, very neat gym.",
  },
  {
    name: "Dita",
    text: "Excellent!!",
  },
  {
    name: "Bojan B.",
    text: "Really good gym!",
  },
  {
    name: "Zsolt L.",
    text: "A well equipped gym in Subotica.",
  },
];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#111111] border border-white/8 p-6"
    >
      <div className="flex text-[#C8FF00] text-sm mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span className="font-display text-lg tracking-wider text-white mb-2 block">
        {name}
      </span>
      <p className="text-white/60 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function Recenzije() {
  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 30% 100%)",
            background: "#111111",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="font-display text-7xl sm:text-9xl text-white leading-none mb-6">
              RECENZIJE
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Reči naših članova.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center gap-4">
          <span className="font-display text-5xl text-[#C8FF00] leading-none">
            4.7★
          </span>
          <span className="text-white/60 text-sm tracking-wider">
            150+ recenzija na Google Maps
          </span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Segment/@46.1103226,19.6770804,17z/data=!3m1!4b1!4m6!3m5!1s0x474366b3aa57b97d:0xd423b12912a4b2b1!8m2!3d46.1103189!4d19.6796553!16s%2Fg%2F11g6982jcc?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white px-8 py-4 text-sm tracking-widest uppercase hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
          >
            Ostavi recenziju na Google Maps →
          </a>
        </motion.div>
      </section>
    </main>
  );
}
