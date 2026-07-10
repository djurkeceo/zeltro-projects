import { useState, useEffect } from 'react'

export function getIsOpen(): boolean {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const time = hour + minute / 60

  if (day === 0) return false
  if (day === 6) return time >= 9 && time < 15
  return time >= 9 && time < 19
}

export default function OpenStatus() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(getIsOpen())
    const interval = setInterval(() => setIsOpen(getIsOpen()), 60000)
    return () => clearInterval(interval)
  }, [])

  return isOpen ? (
    <span className="inline-flex items-center gap-2 text-[#D4A8B0] text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4A8B0] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4A8B0]" />
      </span>
      OTVORENO
    </span>
  ) : (
    <span className="text-white/35 text-sm">ZATVORENO</span>
  )
}
