import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
} as const

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
      {eyebrow && (
        <p className="text-[#7C9E8F] text-[0.65rem] tracking-[0.5em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display italic text-white font-light leading-[0.95] mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
