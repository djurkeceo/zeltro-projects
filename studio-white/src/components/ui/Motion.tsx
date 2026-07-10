import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FadeUp({ children, className = '', delay = 0 }: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', stagger = 0.08 }: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Button({ children, href, className = '', variant = 'primary' }: {
  children: ReactNode
  href: string
  className?: string
  variant?: 'primary' | 'secondary'
}) {
  const base = variant === 'primary'
    ? 'border border-[#D4A8B0]/60 text-[#D4A8B0] rounded-full px-8 py-3.5 hover:bg-[#D4A8B0] hover:text-[#0c0a0b] transition-all duration-300'
    : 'text-white/40 hover:text-white transition-colors duration-300'

  return (
    <motion.a
      href={href}
      className={`inline-block ${base} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
    >
      {children}
    </motion.a>
  )
}

export function BokehCircle({ className, duration = 14 }: {
  className: string
  duration?: number
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
