import { BokehCircle } from './Motion'

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
      <BokehCircle className="bg-[#D4A8B0]/6 blur-[140px] h-[400px] w-[400px] top-[-10%] right-[-5%]" duration={14} />
      <BokehCircle className="bg-[#F5EDE8]/4 blur-[120px] h-72 w-72 bottom-0 left-10" duration={16} />
      <BokehCircle className="bg-[#D4A8B0]/3 blur-[100px] h-56 w-56 top-1/3 left-1/3" duration={12} />
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-display italic font-light text-white leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          {title}
        </h1>
        <p className="text-white/40 text-sm leading-relaxed">{subtitle}</p>
      </div>
    </section>
  )
}
