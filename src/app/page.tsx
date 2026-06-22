import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { CalBooking } from "@/components/CalBooking";
import { Services } from "@/components/Services";
import { TrustStrip } from "@/components/TrustStrip";
import { Personas } from "@/components/Personas";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <Personas />
        <CalBooking />
        <Services />
        <AboutUs />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
