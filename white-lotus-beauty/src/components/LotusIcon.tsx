export default function LotusIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
    >
      {/* center circle */}
      <circle cx="50" cy="50" r="6" />
      {/* 6 petals arranged radially */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 50 + 28 * Math.sin(rad)
        const cy = 50 - 28 * Math.cos(rad)
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="10"
            ry="18"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        )
      })}
    </svg>
  )
}
