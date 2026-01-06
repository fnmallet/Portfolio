import Section from '@/components/Section';
import ImageAvatar from '@/assets/images/about/avatar.jpg';
import SectionTitle from '@/components/SectionTitle';
import { ID } from '@/constants/id';

const AboutSection = () => {
  return <Section id={ID.section.about} className='gap-8'>
    <SectionTitle>Sobre mí</SectionTitle>
    <div className='grid grid:rows-2 xl:grid-cols-2 text-center gap-8 bg-black'>
      <div className='border row-start-2 xl:row-start-1 h-full flex flex-col justify-center items-center p-8 gap-8 rounded-2xl border-gray-dark'>
        <div className='text-white text-[1.2rem] flex flex-col gap-4'>
          <p>
            ❝Soy estudiante ingeniería en informática con experiencia en soporte técnico y en proyectos propios. Me enfoco en el rol de desarrollador web frontend, aprovechando cada oportunidad para aprender y ganar experiencia práctica.
          </p>
          <p>
            Siempre estoy abierto a explorar otras áreas de IT, ya que me parecen interesantes los distintos aspectos que intervienen en un sistema informático.❞
          </p>
        </div>
      </div>
      <div className='row-start-1 xl:row-start-1'>
        <img src={ImageAvatar} alt='Fernando Mallet' className='rounded-2xl'/>
      </div>
    </div>
  </Section>;
};

export default AboutSection;