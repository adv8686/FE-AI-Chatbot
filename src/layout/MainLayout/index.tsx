import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

const MainHeader = dynamic(() => import('../components/MainHeader'));

const MainLayout = ({ children }: any) => {
  const [scrollY, setScrollY] = useState(0);
  const divRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current.scrollTop > 0) {
        setScrollY(divRef.current.scrollTop);
      } else {
        setScrollY(0);
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={divRef} className='w-full h-screen overflow-auto overflow-x-hidden'>
      <MainHeader scrollY={scrollY} />
      <div className='container m-auto p-6'>{children}</div>
    </div>
  );
};

export default MainLayout;
