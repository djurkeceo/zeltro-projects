import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <article
      className={`glass-panel group relative overflow-hidden rounded-2xl p-6 ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="mb-5 inline-flex rounded-xl bg-white/10 p-2 text-blue-300 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{description}</p>
    </article>
  );
}
