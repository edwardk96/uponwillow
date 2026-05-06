import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Control } from "@/components/sections/control";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Team } from "@/components/sections/team";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto bg-surface">
        <Hero />
        <Journey />
        <Control />
        <Pricing />
        <FAQ />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
