import { URL } from '@/config/url';
import { IconGitHub } from '@/components/icons/IconSVGs';

const Footer = () => {
  return <footer className="py-22 bg-black gap-8 text-gray flex flex-col items-center text-center">
    <a 
      title="Ver el código fuente del portfolio en GitHub"
      className='flex items-center gap-2 underline text-white transition-colors hover:text-primary'
      href={URL.source}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconGitHub className='w-6 h-6' />Código fuente del portfolio
    </a>
    <p className="leading-8">© {new Date().getFullYear()} Fernando Mallet.</p>
  </footer>;
};

export default Footer;