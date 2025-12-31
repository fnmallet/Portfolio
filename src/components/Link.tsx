import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({href, children, className}: LinkProps) => {
  return <a
    href={href}
    className={cn(className, 'text-gray border-b border-transparent hover:border-gray transition-colors duration-200 ease-in-out')}
  >
    {children}
  </a>; 
};

export default Link;