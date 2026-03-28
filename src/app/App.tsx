import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LecturioSection } from './components/LecturioSection';
import { PakistanContextSection } from './components/PakistanContextSection';
import { SolutionsSection } from './components/SolutionsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LecturioSection />
        <PakistanContextSection />
        <SolutionsSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}