import { motion } from 'framer-motion'
import LotusIcon from './LotusIcon'

interface Props {
  title: string
  subtitle?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
} as const

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-[#7C9E8F]/7 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-5 h-96 w-96 bg-[#7C9E8F]/4 blur-[120px] rounded-full" />
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <LotusIcon className="text-[#7C9E8F]/5 h-80 w-80" />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative text-center px-5 max-w-2xl"
      >
        <h1
          className="font-display italic font-light text-white leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  )
}
