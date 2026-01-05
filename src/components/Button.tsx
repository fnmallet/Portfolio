import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  intent?: 'primary' | 'secondary';
  gradient?: boolean;
}

const Button = ({ children, className, gradient, intent = 'primary' }: ButtonProps) => {
  const intentClasses = {
    primary: gradient ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-primary hover:bg-primary/80',
    secondary: 'bg-black hover:bg-white hover:text-gray-dark border-gray-dark border-1'
  };

  return <button className={cn('rounded-[16px] px-12 py-4 text-white cursor-pointer', intentClasses[intent], className)}>
    {children}
  </button>;
};

export default Button;