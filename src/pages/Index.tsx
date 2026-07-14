import Navbar from './_components/Navbar.tsx';
import Hero from './_components/Hero.tsx';
import About from './_components/About.tsx';
import Services from './_components/Services.tsx';
import Portfolio from './_components/Portfolio.tsx';
import Stats from './_components/Stats.tsx';
import Skills from './_components/Skills.tsx';
import Testimonials from './_components/Testimonials.tsx';
import Process from './_components/Process.tsx';
import FAQ from './_components/FAQ.tsx';
import Contact from './_components/Contact.tsx';
import Footer from './_components/Footer.tsx';
import WhatsAppButton from './_components/WhatsAppButton.tsx';

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
