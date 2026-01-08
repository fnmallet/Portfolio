import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  intent?: 'primary' | 'secondary';
  gradient?: boolean;
  href: string;
}

const LinkButton = ({ children, className, gradient, intent = 'primary', href }: LinkButtonProps) => {
  const intentClasses = {
    primary: gradient ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-primary hover:bg-white hover:outline-1 hover:outline-primary hover:text-primary group',
    secondary: 'bg-black hover:bg-white hover:text-gray-dark outline-gray-dark outline-1'
  };

  return <a className={cn('rounded-[16px] px-12 py-4 text-white cursor-pointer text-center', intentClasses[intent], className)} href={href}>
    {children}
  </a>;
};

export default LinkButton;