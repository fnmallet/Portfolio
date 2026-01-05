import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type SectionProps = {
  className?: string;
  children: ReactNode;
  id?: string;
}

const Section = ({children, className, id}: SectionProps) => {
  return <section id={id} className={cn('px-8 w-full max-w-100 md:max-w-150 box-border xl:max-w-292.5 mx-auto flex flex-col items-center justify-center', className)}>
    {children}
  </section>;
};

export default Section;