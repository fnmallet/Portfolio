import type { FAQ } from '@/components/sections/FAQSection';
import AccordionItem from '@/components/AccordionItem';
import { useState } from 'react';

type AccordionProps = {
  FAQs: FAQ[]
}

const Accordion = ({ FAQs}: AccordionProps) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setActiveFAQ(prev => prev === value ? null : value);
  };

  return <div className='flex flex-col text-white w-full transition-all'>
    {
      FAQs.map((FAQ, index) => <AccordionItem
        key={index}
        index={index}
        isActive={activeFAQ === index}
        onClick={handleClick}
        {...FAQ}
      />)
    }
  </div>;
};

export default Accordion;