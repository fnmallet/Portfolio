import Section from '@/components/Section';
import ImageKaizen from '@/assets/images/projects/kaizen.png';
import ImageIndustriasTango from '@/assets/images/projects/industrias-tango.png';
import ImageFanelacteo from '@/assets/images/projects/fanelacteo.png';
import ImageAlfombrasTauro from '@/assets/images/projects/alfombras-tauro.png';
import ImageSmartech from '@/assets/images/projects/smartech.png';
import ImageAdministradorDeStock from '@/assets/images/projects/administrador-de-stock.png';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import SectionTitle from '@/components/SectionTitle';
import { ID } from '@/constants/id';
import { IconCode, IconLink } from '@/components/icons/IconSVGs';
import AnimatedArticle from '@/components/AnimatedArticle';
import AnimatedContainer from '@/components/AnimatedContainer';

type ProjectType = {
  filter: FilterOption;
  tag: string;
}

type Project = {
  name: string;
  src: string;
  year: number;
  description: string;
  url: string;
  type: ProjectType;
  source?: string;
}

const projectTypes: Record<'professional' | 'personal', ProjectType> = {
  professional: {
    filter: 'Profesionales',
    tag: 'Proyecto profesional',
  },
  personal: {
    filter: 'Personales',
    tag: 'Proyecto personal'
  }
} as const;

const projects: Project[] = [
  {
    name: 'Kaizen Lonas',
    src: ImageKaizen,
    year: 2025,
    description: 'En este proyecto el cliente quería un rediseño del sitio que tenían. Al ser un rediseño importante y no contar con el código fuente, el desarrollo se hizo desde cero. Se utilizó Next.js para mejorar la experiencia del usuario y favorecer el SEO. Se incluyó la integración con la la cuenta de Google Analytics del cliente.',
    url: 'https://kaizenlonas.com.ar/',
    type: projectTypes.professional
  },
  {
    name: 'Industrias Tango',
    src: ImageIndustriasTango,
    year: 2025,
    description: 'El proyecto consisitió en el diseño y desarrollo de una landing page. El cliente buscaba mostrar en una misma página sus productos, por lo que a cada tarjeta de producto se le incluyó un carrusel donde se pudieran ver todas las imágenes asociadas. Como detalle se incorporó la función de ampliar a pantalla completa cada carrusel.',
    url: 'https://industriastango.com.ar/',
    type: projectTypes.professional
  },
  {
    name: 'Fanelácteo',
    src: ImageFanelacteo,
    year: 2026,
    description: 'Se realizó un diseño y desarrollo de una landing page para una empresa productora de lácteos. En ella se presentan algunos de sus productos.',
    url: 'https://fanelacteo.com.ar/',
    type: projectTypes.professional
  },
  {
    name: 'Alfombras Tauro',
    src: ImageAlfombrasTauro,
    year: 2025,
    description: 'En este proyecto se diseñó y desarrolló un sitio web para una empresa que vende principalmente alfombras. En este caso participamos dos desarrolladores frontend. Mi rol fue principalmente apoyar al otro desarrollador para crear toda la parte pública, además de ocuparme de desarrollar la interfaz para un administrador que permite al cliente modificar los productos y banners.',
    url: 'https://alfombrastauro.com/',
    type: projectTypes.professional
  },
  {
    name: 'Smartech',
    src: ImageSmartech,
    year: 2021,
    description: 'Este fue mi primer proyecto, hecho solo con HTML y SCSS durante mi primer curso de desarrollo web.',
    url: 'https://fnmallet.github.io/smartech/',
    type: projectTypes.personal,
    source: 'https://github.com/fnmallet/smartech'
  },
  {
    name: 'Administrador de Stock',
    src: ImageAdministradorDeStock,
    year: 2022,
    description: 'Este proyecto lo hice para el curso de JavaScript. Consiste en un ABM de productos en una tabla, completamente gestionado desde el lado del cliente.',
    url: 'https://fnmallet.github.io/Administrador-de-Stock/',
    type: projectTypes.personal,
    source: 'https://github.com/fnmallet/Administrador-de-Stock'
  },
];

type FilterOption = 'Todos' | 'Profesionales' | 'Personales';

const filterOptions: FilterOption[] = ['Todos', 'Profesionales', 'Personales'];

const ProjectsSection = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState<FilterOption>('Todos');

  return <Section className='gap-11' id={ID.section.projects}>
    <SectionTitle>Proyectos</SectionTitle>
    <div className='flex flex-col gap-4 md:flex-row justify-between w-full md:max-w-102'>
      {
        filterOptions.map((filterOption, index) => <button
          key={index}
          className={cn('px-4 py-2 text-white transition-colors duration-300 rounded-xl text-base whitespace-nowrap cursor-pointer', {
            'bg-primary': filterOption === selectedFilterOption,
            'outline outline-gray-dark bg-black': filterOption !== selectedFilterOption
          })}
          onClick={() => { setSelectedFilterOption(filterOption);}}
        >
          {filterOption}
        </button>)
      }
    </div>
    <AnimatedContainer className='grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-10'>
      {
        projects.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })).filter((project) => selectedFilterOption === 'Todos' || selectedFilterOption === project.type.filter).map(project => <AnimatedArticle key={project.name} className='bg-black flex flex-col gap-4 zoom-in'>
          <div className='flex flex-col gap-4'>
            <a href={project.url} target='_blank' rel='noopener noreferrer'>
              <img src={project.src} alt={project.name} className='rounded-xl w-full h-46 md:h-64' />
            </a>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between text-white items-center'>
                <h3 className='text-[1.5rem]'>{project.name}</h3>
                <span>{project.year.toString()}</span>
              </div>
              <p className='text-gray'>{project.description}</p>
            </div>
          </div>
          <div className='grow flex items-end'>
            <div className='flex w-full justify-between items-center'>
              <span className='text-gray border border-gray rounded-xl py-1 px-2 w-fit'>
                {project.type.tag}
              </span>
              <div className='flex gap-4'>
                {
                  project.source && <a
                    className='fill-white hover:fill-primary'
                    href={project.source}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <IconCode className='w-8 h-8' />
                  </a>
                }
                <a
                  className='fill-white hover:fill-primary'
                  href={project.url}
                  target='_blank' rel='noopener noreferrer'
                >
                  <IconLink className='w-8 h-8' />
                </a>
              </div>
            </div>
          </div>
        </AnimatedArticle>)
      }
    </AnimatedContainer>
  </Section>;
};

export default ProjectsSection;