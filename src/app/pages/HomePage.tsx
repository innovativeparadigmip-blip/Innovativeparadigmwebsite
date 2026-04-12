import { HeroSection } from '../components/HeroSection';
import { ServicesOverviewSection } from '../components/ServicesOverviewSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <TestimonialsSection />
    </>
  );
}
