import style from '@/components/sections/HeroSection/HeroSection.module.css';
import LinkButton from '@/components/LinkButton';
import { IconProyects } from '@/components/icons/IconSVGs';
import Section from '@/components/Section';
import { ID } from '@/constants/id';
import { publicUrl } from '@/config/publicUrl';
import { motion } from 'motion/react';

export const HeroSection = () => {
  return <div className={`${style['hero-container']} flex flex-col justify-center min-h-screen z-10`}>
    <div className='bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] bg-size-[12rem_12rem] w-full h-full absolute top-0 left-0 z-10 opacity-25 bg-center'></div>
    <Section className='gap-6 bg-transparent scroll-mt-100' id={ID.section.home}>
      <div className='md:flex-row gap-8 md:gap-4 z-20'>
        <div className='font-semibold text-center text-white'>
          <motion.div
            className='font-bold flex flex-col text-[2.5rem] md:text-[3.75rem]'
            initial={{
              opacity: 0,
              y: -50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            viewport={{ once: true, amount: 'some' }}
          >
            <span className='md:contents'>Desarrollador {' '}</span>
            <span className='font-bold uppercase md:contents'>Frontend</span>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className='flex flex-col justify-center items-center gap-6 z-20'
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.6
        }}
        viewport={{ once: true, amount: 'some' }}
      >
        <p className='text-gray text-base md:text-[20px] xl:text-[2rem] text-center max-w-250'>
          Construyendo proyectos que eficientes y escalables, siempre enfocado en crear experiencias digitales atractivas, accesibles y que realmente generen un impacto positivo para los usuarios.
        </p>
        <div className='grid grid-cols-2 gap-4 justify-items-center w-69.5'>
          <LinkButton href={`#${ID.section.projects}`} intent='primary' className='flex px-0 w-full justify-center gap-2 items-center'>
            Proyectos <IconProyects className='stroke-white group-hover:stroke-primary' />
          </LinkButton>
          <LinkButton href={publicUrl.documents.cv} intent='secondary' className='px-0 w-full'>
            Mirá mi CV
          </LinkButton>
        </div>
      </motion.div>
    </Section>
  </div>;
};

export default HeroSection;