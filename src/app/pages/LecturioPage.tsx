import { LecturioSection } from '../components/LecturioSection';
import { PakistanContextSection } from '../components/PakistanContextSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { BenefitsSection } from '../components/BenefitsSection';

export function LecturioPage() {
  return (
    <>
      <div className="pt-20"></div>
      <LecturioSection />
      <PakistanContextSection />
      <SolutionsSection />
      <BenefitsSection />
    </>
  );
}
