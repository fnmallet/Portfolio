import Nav from '@/components/Nav';
import { BREAKPOINTS } from '@/config/breakpoints';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { IconGitHub, IconLinkedIn, IconWhatsApp } from '@/components/icons/IconSVGs';
import { URL } from '@/config/url';

type NavContainerProps = {
  isHamburgerMenuActive: boolean;
  id: string;
  onNavLinkClick: () => void;
}

const NavContainer = ({ isHamburgerMenuActive, id, onNavLinkClick }: NavContainerProps) => {
  const mediaQuery = useMediaQuery(`(min-width: ${BREAKPOINTS.xlc}px)`);
    
  return <div
    id={id}
    inert={!isHamburgerMenuActive && !mediaQuery.matches}
    className={cn('grow flex flex-col xlc:flex xlc:flex-row xlc:justify-between xlc:opacity-100 transition-opacity duration-500', {
      'opacity-0': !isHamburgerMenuActive, 
      'opacity-100': isHamburgerMenuActive
    })}>
    <div className={'bg-black h-dvh w-screen absolute top-0 right-0 xlc:hidden ease-in-out pointer-events-none'}></div>
    <div className='h-dvh w-screen absolute top-0 right-0 flex px-8 pt-36 py-10 xlc:contents flex-col'>
      <Nav className='z-10' onNavLinkClick={onNavLinkClick}/>
      <div className='grow xlc:grow-0 flex items-end z-10'>
        <div className='flex gap-4 fill-white justify-center w-full'>
          <a href={URL.gitHub} aria-label='GitHub' target='_blank' rel="noopener noreferrer" title='GitHub'>
            <IconGitHub className='w-8 h-8 hover:scale-105' />
          </a>
          <a href={URL.linkedIn} aria-label='LinkedIn' target='_blank' rel="noopener noreferrer" title='LinkedIn'>
            <IconLinkedIn className='w-8 h-8 fill-white hover:scale-105' />
          </a>
          <a href={URL.whatsApp} aria-label='WhatsApp' target='_blank' rel="noopener noreferrer" title='WhatsApp'>
            <IconWhatsApp className='w-8 h-8 fill-white hover:scale-105' />
          </a>
        </div>
      </div>
    </div>
  </div>;
};

export default NavContainer;