import { useEffect, useRef, useState } from 'react';

import CardTestimonial from './CardTestimonial';
import HeaderLangdingPage from './HeaderLangdingPage';
import HowItWork from './HowItWork';
import Pricing from './Pricing';
import WhyDemy from './WhyDemy';

const LandingPage = () => {
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
    <div ref={divRef} className='w-screen h-screen overflow-auto'>
      <div className='bg-[url("/images/bg-header.png")] h-max pb-[130px] bg-no-repeat bg-cover'>
        <HeaderLangdingPage scrollY={scrollY} />
        <WhyDemy />
      </div>
      <HowItWork />
      <CardTestimonial />
      <Pricing />
    </div>
  );
};
export default LandingPage;
