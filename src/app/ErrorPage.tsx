import { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return <div className='fixed w-dvw h-dvh bg-black'></div>; 
};

export default ErrorPage;