import { IconMenu } from '@/components/icons/IconMenu';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import NavContainer from './NavContainer';
import useWindow from '@/hooks/useWindow';

const NAV_CONTAINER_ID = 'nav-container';

const Header = () => {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  const isScrolled = useWindow().isScrolled;
  
  return <header className={cn('fixed w-screen top-0 right-0 px-8 xlc:px-33.5 py-10 xlc:py-6 xlc:gap-11 flex flex-col transition-colors duration-500 xlc:flex-row xlc:items-center xlc:justify-between z-100', {
    'h-dvh xlc:h-auto gap-11': isHamburgerMenuActive,
    'justify-end': !isHamburgerMenuActive,
    'bg-linear-0 from-primary to-secondary': isScrolled && !isHamburgerMenuActive,
  })}>
    <div className='flex justify-between xlc:contains'>
      <span className='italic text-white z-10 text-[1.8rem]'>Fernando Mallet</span>
      <div className='flex justify-end items-center xlc:contents'>
        <button
          className='rounded-xlc xlc:hidden cursor-pointer z-10'
          onClick={() => {setIsHamburgerMenuActive(!isHamburgerMenuActive);}}
          aria-label='Menú'
          aria-expanded={isHamburgerMenuActive}
          aria-controls={NAV_CONTAINER_ID}
        >
          <IconMenu
            className='w-6.75'
            isScrolled={isScrolled}
            isOpen={isHamburgerMenuActive}
          />
        </button>
      </div>    
    </div>
    <NavContainer id={NAV_CONTAINER_ID} isHamburgerMenuActive={isHamburgerMenuActive} onNavLinkClick={() => setIsHamburgerMenuActive(false)} />
  </header>;
};

export default Header;