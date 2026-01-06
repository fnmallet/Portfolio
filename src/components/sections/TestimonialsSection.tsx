import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import TestimonialsCarousel, { type Testimonial } from '@/components/TestimonialsCarousel';
import { ID } from '@/constants/id';
import ImageAvatarKaizen from '@/assets/images/testimonials/avatar-kaizenlonas.png';
import ImageAvatarGevemar from '@/assets/images/testimonials/avatar-gevemar.png';
import ImageAvatarVanicracia from '@/assets/images/testimonials/avatar-vanicracia.png';

const testimonials: Testimonial[] = [
  {
    text: '"La experiencia trabajando con Web Space fue excepcional. Su expertise técnico combinado con una comunicación clara hizo que todo el proceso fuera fluido y exitoso."',
    name: 'Lourdes',
    role: 'Directora Comunicacional de Kaizen Lonas',
    avatar: ImageAvatarKaizen
  },
  {
    text: '❝Estamos muy conformes con el resultado de nuestro nuevo sitio web. La atención siempre fue cordial y atenta, acompañándonos en todo el proceso de desarrollo. El equipo supo interpretar nuestras necesidades y plasmarlo en una página moderna, clara y funcional. ¡Quedamos muy satisfechos con el trabajo realizado!❞',
    name: 'Germán',
    role: 'Fundador de Gevemar',
    avatar: ImageAvatarGevemar
  },
  {
    text: 'Me encantó la estética del sitio, quedó muy moderno y prolijo. Desde el primer momento la atención fue excelente, siempre con buena predisposición y resolviendo cualquier detalle que surgía. El resultado final superó mis expectativas, quedé muy contenta. ¡Gracias por el gran trabajo!',
    name: 'Vanina',
    role: 'Emprendedora',
    avatar: ImageAvatarVanicracia
  }
];

const TestimonialsSection = () => {
  return <Section id={ID.section.testimonials} className='gap-4 mb-24'>
    <SectionTitle>Testimonios</SectionTitle>
    <p className='text-gray w-full'>Comentarios de clientes por proyectos que realicé con mi equipo.</p>
    <div className='max-w-full mt-4'>
      <TestimonialsCarousel testimonials={testimonials} options={{ align: 'start', dragFree: true, loop: true }} />
    </div>
  </Section>;
};

export default TestimonialsSection;