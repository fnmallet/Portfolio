import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const NavLink = ({href, children, className, onClick}: NavLinkProps) => {
  return <a
    href={href}
    className={cn(className, 'text-white hover:scale-110 hover:font-bold transition-all border-b border-transparent duration-200 ease-in-out')}
    onClick={onClick}
  >
    {children}
  </a>; 
};

export default NavLink;