import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Pillars } from '@/components/sections/Pillars';
import { Methodology } from '@/components/sections/Methodology';
import { Results } from '@/components/sections/Results';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <Pillars />
        <Methodology />
        <Results />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
