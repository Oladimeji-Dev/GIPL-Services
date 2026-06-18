import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { QuoteSection } from "@/components/QuoteSection";
import { Contact } from "@/components/Contact";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
