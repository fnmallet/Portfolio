import type { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode
}

const SectionTitle = ({children}: SectionTitleProps) => {
  return <h2 className='text-white text-[2.5rem] text-center'>{children}</h2>;
};

export default SectionTitle;