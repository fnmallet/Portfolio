import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { type EmblaOptionsType } from 'embla-carousel';

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

type TestimonialsCarouselProps = {
  options?: EmblaOptionsType;
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials, options }: TestimonialsCarouselProps) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return <div className="embla bg-black">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {testimonials.map((testimonial, index) => <div
          key={index}
          className='embla__slide'>
          <article className='text-gray bg-black text-base flex flex-col gap-8 border border-gray-dark rounded-2xl p-4 h-full'>
            <div className='flex flex-col xl:flex-row items-center gap-4 border-b border-b-gray-dark pb-4'>
              <img src={testimonial.avatar} alt='' className='rounded-full w-16 h-16'/>
              <div className='flex flex-col text-center xl:text-left gap-1'>
                <p className='font-bold text-gray text-[1.5rem]'>{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <p className='grow h-42 overflow-y-auto scrollbar-thin scrollbar-track-gray-dark scrollbar-thumb-gray text-center md:text-left'>{testimonial.text}</p>
          </article>
        </div>)}
      </div>
    </div>
  </div>;
};

export default TestimonialsCarousel;