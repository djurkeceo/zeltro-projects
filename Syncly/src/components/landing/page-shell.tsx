import type { ReactNode } from "react";
import { AnimatedBackground } from "./animated-background";
import { Navbar } from "./navbar";
import { FooterCta } from "./footer-cta";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pb-14">{children}</main>
      <FooterCta />
    </div>
  );
}
