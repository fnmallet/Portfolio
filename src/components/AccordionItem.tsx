import { cn } from '@/utils/cn';
import { useEffect, useRef, useState } from 'react';

type AccordionItemProps = {
  ask: string;
  answer: string;
  isActive: boolean;
  onClick: (value: number) => void;
  index: number;
}

const AccordionItem = ({ask, answer, isActive, index, onClick}: AccordionItemProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (ref.current && isActive) {
      setHeight(ref.current.scrollHeight);
    }
  }, [answer, isActive]);

  return <button onClick={() => {onClick(index);}} className='flex flex-col cursor-pointer pt-6 text-[1rem] md:text-[1.5rem]'>
    <div className={cn('flex justify-between text-start text-[1.5rem] w-full border-b border-b-gray-dark pb-6 items-center')}>
      <p>{ask}</p>
      <span className='font-mono'>{isActive ? '-' : '+'}</span>
    </div>
    <p 
      ref={ref}
      style={{maxHeight: isActive ? `${height}px` : '0px'}}
      className={cn('w-full text-start pt-6 text-base transition-[max-height] ease-out duration-700 overflow-hidden whitespace-break-spaces')}>
      {answer}
    </p>
  </button>;
};

export default AccordionItem;