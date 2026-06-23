import { HeroMotion } from "@/components/HeroMotion";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-paper flex flex-col min-h-[560px] h-svh md:h-dvh"
    >
      <HeroMotion />
    </section>
  );
}
