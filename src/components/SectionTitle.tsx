import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type SectionTitleProps = {
  children: ReactNode
}

const SectionTitle = ({children}: SectionTitleProps) => {
  return <motion.h2
    className='text-white text-[2rem] md:text-[2.5rem] text-center bg-black tracking-widest'
    initial={{
      x: -50
    }}
    whileInView={{
      x: 0,
    }}
    transition={{
      duration: 0.6
    }}
    viewport={{ once: true, amount: 'all' }}
  >
    {children}
  </motion.h2>;
};

export default SectionTitle;