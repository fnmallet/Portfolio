import Section from '@/components/Section';
import ImageHTML5 from '@/assets/images/technologies/html5.png';
import ImageCSS from '@/assets/images/technologies/css.png';
import ImageJS from '@/assets/images/technologies/js.png';
import ImageTS from '@/assets/images/technologies/ts.png';
import ImageReact from '@/assets/images/technologies/react.png';
import ImageFigma from '@/assets/images/technologies/figma.png';
import ImageTailwind from '@/assets/images/technologies/tailwind.png';
import ImageNextJs from '@/assets/images/technologies/nextjs.png';
import SectionTitle from '../SectionTitle';
import { ID } from '@/constants/id';

const TechnologiesSection = () => {
  return <Section id={ID.section.technologies} className='gap-7 md:gap-11'>
    <SectionTitle>Tecnologías que utilizo</SectionTitle>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16 xl:gap-x-32 xl:gap-y-16 justify-items-center justify-between w-full xl:px-32'>
      <img src={ImageHTML5} alt='HTML 5' title='HTML 5' />
      <img src={ImageCSS} alt='CSS 3' title='CSS 3' />
      <img src={ImageJS} alt='JavaScript' title='JavaScript' />
      <img src={ImageTS} alt='TypeScript' title='TypeScript' />
      <img src={ImageReact} alt='ReactJs' title='ReactJs' />
      <img src={ImageFigma} alt='Figma' title='Figma' />
      <img src={ImageTailwind} alt='Tailwind' title='Tailwind' />
      <img src={ImageNextJs} alt='Next.js' title='Next.js' className='bg-gray rounded-full p-px'/>
    </div>
  </Section>;
};

export default TechnologiesSection;