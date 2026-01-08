import { AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';

type AnimatedContainerProps = {
  children: ReactNode;
  className?: string;
}

const AnimatedContainer = ({ children, className }: AnimatedContainerProps) => {
  return <div
    className={className}
  >
    <AnimatePresence>
      {children}
    </AnimatePresence>
  </div>;
};

export default AnimatedContainer;