import { FadeUp } from './Motion'

export default function SectionHeading({ eyebrow, title, subtitle }: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <FadeUp className="text-center mb-16">
      <p className="text-[#D4A8B0] text-[0.65rem] tracking-[0.4em] font-sans mb-4 uppercase">{eyebrow}</p>
      <h2 className="font-display italic font-light text-white leading-[0.95]"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
        {title}
      </h2>
      {subtitle && <p className="text-white/40 text-sm mt-4 max-w-md mx-auto leading-relaxed">{subtitle}</p>}
    </FadeUp>
  )
}
