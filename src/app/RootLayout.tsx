import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';
import ImageArrowTop from '@/assets/images/ui/arrow-top.png';
import { ID } from '@/constants/id';

const RootLayout = () => {
  return <>
    <Header />
    <main 
      className='flex flex-col gap-16 bg-black bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-size-[8rem_8rem] -z-10 bg-center'>
      <Outlet />
    </main>
    <a
      className='fixed bottom-14 right-8 xlc:right-33.5 w-16 h-16 z-30'
      href={`#${ID.section.home}`}
      aria-label='Ir al inicio'
    >
      <img
        src={ImageArrowTop}
        alt='Ir al inicio'
        title='Ir al inicio'
        className='hover:scale-105 transition-transform'
      />
    </a>
    <Footer />
  </>;
};

export default RootLayout;