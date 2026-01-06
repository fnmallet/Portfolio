import { ID } from '@/constants/id';
import NavLink from '@/components/NavLink';
import { useEffect } from 'react';
import { cn } from '@/utils/cn';

type NavProps = {
  id?: string;
  className?: string;
  onNavLinkClick: () => void;
}

const activeLinkClass = ['xlc:font-bold', 'xlc:scale-110'];

const Nav = ({ id, className, onNavLinkClick }: NavProps) => {
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section');
      let min = Infinity;
      let closerSectionId: string | null = null;
      sections.forEach(section => {
        const newMin = Math.abs(section.getBoundingClientRect().top);
        const navLink = document.querySelector(`nav a[href='#${section.id}']`);
        if(newMin < min) {
          min = newMin;
          closerSectionId = section.id;
        }
        if(!navLink)
          return;

        activeLinkClass.forEach(c => {
          navLink.classList.remove(c);}
        );
      });

      if(closerSectionId) {
        const closerSection = document.querySelector(`#${closerSectionId}`);

        if(!closerSection)
          return;

        const navLink = document.querySelector(`nav a[href='#${closerSection.id}']`);

        if(!navLink)
          return;

        if(closerSection)
          activeLinkClass.forEach(c => {
            navLink.classList.add(c);}
          );
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <nav id={id} className={cn('flex flex-col gap-6 text-base xlc:flex xlc:flex-row xlc:items-center', className)}>
    <NavLink href={'#' + ID.section.about} onClick={onNavLinkClick}>
      Sobre mí
    </NavLink>
    <NavLink href={'#' + ID.section.technologies} onClick={onNavLinkClick}>
      Tecnologías
    </NavLink>
    <NavLink href={'#' + ID.section.projects} onClick={onNavLinkClick}>
      Proyectos
    </NavLink>
    <NavLink href={'#' + ID.section.faq} onClick={onNavLinkClick}>
      Preguntas Frecuentes
    </NavLink>
    <NavLink href={'#' + ID.section.testimonials} onClick={onNavLinkClick}>
      Testimonios
    </NavLink>
  </nav>;
};

export default Nav;