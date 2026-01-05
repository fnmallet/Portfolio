import AboutSection from '@/components/sections/AboutSection';
import FAQSection from '@/components/sections/FAQSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const RootPage = () => {
  return <>
    <HeroSection />
    <AboutSection />
    <TechnologiesSection />
    <ProjectsSection />
    <FAQSection />
    <TestimonialsSection />
  </>;
};

export default RootPage;