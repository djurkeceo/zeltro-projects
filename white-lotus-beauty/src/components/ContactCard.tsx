import { motion } from 'framer-motion'

interface Props {
  icon?: string
  title: string
  children: React.ReactNode
}

export default function ContactCard({ icon = '✿', title, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="bg-[#111413] border border-white/7 rounded-3xl p-6 transition-colors duration-300 hover:border-[#7C9E8F]/30"
    >
      <p className="text-[#7C9E8F] text-lg mb-2">{icon}</p>
      <h3 className="font-display italic text-white text-lg mb-2">{title}</h3>
      <div className="text-white/45 text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}
