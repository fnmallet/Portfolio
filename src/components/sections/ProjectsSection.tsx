import Section from '@/components/Section';
import ImageKaizen from '@/assets/images/projects/Kaizen.png';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import SectionTitle from '@/components/SectionTitle';
import { ID } from '@/constants/id';

type Project = {
  name: string;
  src: string;
  year: number;
  description: string;
  url: string;
  filter: FilterOption;
}

const projects: Project[] = [
  {
    name: 'Kaizen Lonas',
    src: ImageKaizen,
    year: 2025,
    description: 'Placeholder',
    url: 'https://kaizenlonas.com.ar/',
    filter: 'Trabajos reales',
  },
  {
    name: 'Kaizen Lonas',
    src: ImageKaizen,
    year: 2025,
    description: 'Placeholder',
    url: 'https://kaizenlonas.com.ar/',
    filter: 'Trabajos reales',
  },
  {
    name: 'Kaizen Lonas',
    src: ImageKaizen,
    year: 2025,
    description: 'Placeholder',
    url: 'https://kaizenlonas.com.ar/',
    filter: 'Trabajos reales',
  },
  {
    name: 'Kaizen Lonas',
    src: ImageKaizen,
    year: 2025,
    description: 'Placeholder',
    url: 'https://kaizenlonas.com.ar/',
    filter: 'Trabajos reales',
  },
];

type FilterOption = 'Todos' | 'Trabajos reales' | 'Trabajos ficticios';

const filterOptions: FilterOption[] = ['Todos', 'Trabajos reales', 'Trabajos ficticios'];

const ProjectsSection = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState<FilterOption>('Todos');

  return <Section className='gap-11' id={ID.section.projects}>
    <SectionTitle>Proyectos</SectionTitle>
    <div className='flex flex-col gap-4 md:flex-row justify-between w-full md:max-w-102'>
      {
        filterOptions.map((filterOption, index) => <button
          key={index}
          className={cn('px-4 py-2 text-white rounded-xl text-base whitespace-nowrap cursor-pointer', {
            'bg-primary': filterOption === selectedFilterOption,
            'outline outline-gray-dark bg-black': filterOption !== selectedFilterOption
          })}
          onClick={() => { setSelectedFilterOption(filterOption);}}
        >
          {filterOption}
        </button>)
      }
    </div>
    <div className='grid grid-cols-2 gap-6'>
      {
        projects.filter((project) => selectedFilterOption === 'Todos' || selectedFilterOption === project.filter).map((project, index) => <article key={index}>
          <a href={project.url} target='_blank' rel='noopener noreferrer' className='cursor-pointer flex flex-col gap-4'>
            <img src={project.src} alt={project.name} className='rounded-xl' />
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between text-white'>
                <h3>{project.name}</h3>
                <span>{project.year.toString()}</span>
              </div>
              <p className='text-gray'>{project.description}</p>
            </div>
          </a>
        </article>)
      }
    </div>
  </Section>;
};

export default ProjectsSection;