import { motion } from 'motion/react';
import { type ReactNode } from 'react';

type AnimatedArticleProps = {
  children: ReactNode;
  className?: string;
}

const AnimatedArticle = ({ children, className }: AnimatedArticleProps) => {
  return <motion.article
    layout
    className={className}
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1,
        scale: 1,        
        transition: {
          duration: 0.3,
          ease: 'easeOut'
        } },
      exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
          duration: 0.3,
          ease: 'easeIn'
        }
      }
    }}
    initial="hidden"
    whileInView="visible"
    exit="exit"
  >
    {children}
  </motion.article>;
};

export default AnimatedArticle;