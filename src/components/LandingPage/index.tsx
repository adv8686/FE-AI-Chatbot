/* eslint-disable import/no-cycle */
import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

import CardFooter from './CardFooter';
import CardTestimonial from './CardTestimonial';
import FAQ from './FAQ';
import FooterLangdingpage from './FooterLangdingpage';
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
    <div ref={divRef} className='w-screen h-screen overflow-x-hidden overflow-auto'>
      <HeaderLangdingPage scrollY={scrollY} />

      <div
        className={clsx(
          'mt-[-80px] md:bg-[url("/images/bg-header.png")] md:h-[1024px] md:pb-[130px] bg-no-repeat bg-cover',
          {
            '!bg-[url("/images/bg-header-mobile.png")]': isMobile,
          },
        )}
      >
        <WhyDemy />
      </div>
      <HowItWork />
      <CardTestimonial />
      <Pricing />
      <FAQ />
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <CardFooter />
      </AnimatedItem>
      <FooterLangdingpage />
    </div>
  );
};
export default LandingPage;

export const AnimatedItem = (props: any) => {
  const { children, transition, className, type } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: type === 'home' ? 0 : 140 },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      className={className}
      animate={controls}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
