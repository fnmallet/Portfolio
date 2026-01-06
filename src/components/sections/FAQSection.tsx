import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Accordion from '@/components/Accordion';
import { ID } from '@/constants/id';

export type FAQ = {
  ask: string;
  answer: string;
}

const FAQs: FAQ[] = [
  {
    ask: '¿Qué tecnologías manejás?',
    answer: 'Mi punto fuerte es el uso de ReactJs junto a TypeScript. Suelo utilizar Tailwind y ReactQuery en los proyectos. Para los repositorios uso GitHub. Además las implementaciones las hago a partir de diseños presentados en Figma por parte del área de diseño UX/UI.'
  },
  {
    ask: '¿Trabajaste en proyectos reales?',
    answer: 'Sí, trabajé en el desarrollo de sitios web durante un período de tiempo en que me dediqué junto a un par de socios a un emprendimiento que comenzamos a fines del año 2024. Siempre me ocupé de la parte del desarrollo frontend. Mis socios se ocupaban del diseño, desarrollo backend y despliegue.'
  },
  {
    ask: '¿Estás abierto a trabajar en otros roles de IT?',
    answer: 'Sí, me gustaría trabajar distintas áreas que hacen a un sistema informático. El desarrollo frontend me pareció un buen punto de partida para empezar a trabajar como desarrollador luego de mi experiencia en soporte RPA, pero siempre estoy abierto a explorar otras opciones.'
  },
  {
    ask: '¿Cuál es tu proceso para implementar un diseño?',
    answer: 'Antes de implementar un diseño creo que es fundamental que esté bien relevado y validado por el área de diseño UX/UI. \n\nAl recibir el diseño, reviso que no hayan inconsistencias o problemas de definición. Luego analizo patrones para planificar los componentes y la estructura. \n\nPor último, comienzo a implementar el diseño y voy validando con el diseñador que vamos avanzando en el camino correcto.'
  }
];

const FAQSection = () => {
  return <Section id={ID.section.faq} className='gap-4 bg-black'>
    <SectionTitle>Preguntas Frecuentes</SectionTitle>
    <Accordion FAQs={FAQs} />
  </Section>;
};

export default FAQSection;