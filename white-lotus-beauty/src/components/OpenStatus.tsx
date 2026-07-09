import { useState, useEffect } from 'react'

function getStatus() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const min = now.getMinutes()
  const total = hour * 60 + min
  if (day === 0) return false
  if (day === 6) return total >= 9 * 60 && total < 14 * 60
  return day >= 1 && day <= 5 && total >= 10 * 60 && total < 19 * 60
}

export default function OpenStatus() {
  const [open, setOpen] = useState(getStatus)

  useEffect(() => {
    const id = setInterval(() => setOpen(getStatus()), 60000)
    return () => clearInterval(id)
  }, [])

  if (open) {
    return (
      <span className="inline-flex items-center gap-2 text-[#7C9E8F] text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C9E8F] opacity-40" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C9E8F]" />
        </span>
        OTVORENO
      </span>
    )
  }

  return (
    <span className="text-white/35 text-sm">ZATVORENO</span>
  )
}
