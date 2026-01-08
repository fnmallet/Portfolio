import { useEffect, useState } from 'react';

const useWindow = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0)
        setIsScrolled(true);
      else
        setIsScrolled(false);
    });
  }, []);

  return { isScrolled };
};

export default useWindow;