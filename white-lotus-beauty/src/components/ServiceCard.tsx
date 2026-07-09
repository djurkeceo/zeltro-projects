import { motion } from 'framer-motion'

interface Props {
  icon?: string
  title: string
  description: string
  note?: string
  index?: number
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const, delay: i * 0.06 } }),
}

export default function ServiceCard({ icon = '✿', title, description, note, index = 0 }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className="bg-[#111413] border border-white/7 rounded-3xl p-6 transition-colors duration-300 hover:border-[#7C9E8F]/30 hover:bg-[#181c1a] border-t-2 border-t-[#7C9E8F]/20"
    >
      <p className="text-[#7C9E8F] text-lg mb-2">{icon}</p>
      <h3 className="font-display italic text-white text-xl mb-2">{title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{description}</p>
      {note && <p className="text-[#7C9E8F]/60 text-xs mt-3">{note}</p>}
    </motion.div>
  )
}
