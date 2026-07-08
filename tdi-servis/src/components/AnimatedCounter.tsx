import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  formatFn?: (n: number) => string
  className?: string
}

export default function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  formatFn,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!isInView) return
    setDisplayed(0)
    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayed(v),
    })
    return () => controls.stop()
  }, [isInView, to])

  const formatted = formatFn
    ? formatFn(displayed)
    : displayed.toLocaleString('de-DE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
