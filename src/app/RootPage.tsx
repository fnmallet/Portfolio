import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const RootPage = () => {
  return <>
    <HeroSection />
    <div className='relative'>
      <div className='fixed top-0 left-0 w-full h-dvh bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-size-[8rem_8rem] bg-center'></div>
      <div className='relative z-20 flex flex-col gap-16'>
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  </>;
};

export default RootPage;