import Button from '@/components/Button';
import Nav from '@/components/Nav';
import { BREAKPOINTS } from '@/config/breakpoints';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

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
        <Button intent='primary' className='w-full'>Contactame</Button>
      </div>
    </div>
  </div>;
};

export default NavContainer;