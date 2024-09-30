/* eslint-disable import/no-cycle */
import React from 'react';

import { Avatar } from '@nextui-org/react';

import Text from '@components/UI/Text';
import { getAvatar } from '@utils/common';

import { AnimatedItem } from '..';

const testimonials = [
  {
    name: 'Floyd Miles',
    text: 'With a 75% increase in customer engagement, our chatbot truly represents our brand.',
    position: 'UI Designer',
  },
  {
    name: 'Jonathan',
    text: 'Integrating with our systems was seamless! We saved countless hours with the data input feature.',
  },
  {
    name: 'Floyd Miles',
    text: 'Our support team is thrilled! Customer queries handled in minutes instead of hours.',
    position: 'UI Designer',
  },
  {
    name: 'Floyd Miles',
    text: 'Demy.ai is a game-changer for our e-commerce business. Higher sales, happier customers!',
    position: 'UI Designer',
  },
  {
    name: 'Floyd Miles',
    text: 'The analytics feature helps us understand our customers better than ever.',
    position: 'UI Designer',
  },
  {
    name: 'Jonathan',
    text: 'Customizing the chatbot was a breeze. I felt like a tech wizard!',
    position: 'UI Designer',
  },
  {
    name: 'Floyd Miles',
    text: 'Integration was smooth, and the support team is top-notch!',
    position: 'UI Designer',
  },
  {
    name: 'Jonathan',
    text: 'Demy.ai is the secret sauce to our customer engagement strategy.',
    position: 'UI Designer',
  },
];

const TestimonialItem = ({ item }: { item: any }) => (
  <div className='flex-shrink-0 shadow-md rounded-xl w-[406px] h-full border-1 border-solid border-neutral-01 p-8 bg-white  mx-2 my-2'>
    <IconNote />
    <Text type='font-14-400' className='mt-6'>
      {item?.text}
    </Text>
    <div className='flex items-center gap-4 mt-6'>
      <Avatar src={getAvatar()} className='w-12 h-12' />
      <div className='flex flex-col'>
        <Text type='font-12-400'>{item?.name}</Text>
        <Text type='font-12-400' className='text-neutral-04'>
          {item?.position}
        </Text>
      </div>
    </div>
  </div>
);

const CardTestimonial = () => (
  <div id='#testimonials' className='flex flex-col gap-16 pb-[128px]'>
    <div className='flex flex-col gap-4 text-center justify-center items-center'>
      <AnimatedItem
        transition={{
          duration: 0.3,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <div className='border-1 w-max h-[36px] border-solid border-indigo-500 rounded-lg py-2 px-3'>
          <Text type='font-14-400' className='uppercase text-indigo-500'>
            testimonials
          </Text>
        </div>
      </AnimatedItem>
      <AnimatedItem
        transition={{
          duration: 0.4,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <Text type='font-48-600'>
          What Our Users Are
          <br /> Raving About
        </Text>
      </AnimatedItem>
      <AnimatedItem
        transition={{
          duration: 0.5,
          ease: 'linear',
          delay: 0.4,
        }}
      >
        <Text type='font-18-400' className='text-secodary'>
          Hear from satisfied customers who have transformed their businesses with Demy.ai and are
          achieving remarkable results.
        </Text>
      </AnimatedItem>
    </div>
    <AnimatedItem
      transition={{
        duration: 0.7,
        ease: 'linear',
        delay: 0.4,
      }}
    >
      <div className='relative w-full h-max overflow-hidden'>
        <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10'></div>
        <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10'></div>
        <div className='flex flex-col'>
          <div className='flex animate-scroll-left'>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialItem key={`row1-${index}`} item={testimonial} />
            ))}
          </div>
          <div className='flex animate-scroll-right mt-4'>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialItem key={`row2-${index}`} item={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedItem>
  </div>
);

export default CardTestimonial;

const IconNote = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='39' height='29' viewBox='0 0 39 29' fill='none'>
      <path
        opacity='0.05'
        d='M21.75 25.5024V9.00244C21.7525 6.61625 22.7015 4.32851 24.3888 2.64122C26.0761 0.95393 28.3638 0.00492287 30.75 0.00244141C31.1478 0.00244141 31.5294 0.160475 31.8107 0.44178C32.092 0.723085 32.25 1.10462 32.25 1.50244C32.25 1.90027 32.092 2.2818 31.8107 2.5631C31.5294 2.84441 31.1478 3.00244 30.75 3.00244C29.1587 3.00244 27.6326 3.63458 26.5074 4.7598C25.3821 5.88502 24.75 7.41114 24.75 9.00244V10.5024H36C36.7956 10.5024 37.5587 10.8185 38.1213 11.3811C38.6839 11.9437 39 12.7068 39 13.5024V25.5024C39 26.2981 38.6839 27.0612 38.1213 27.6238C37.5587 28.1864 36.7956 28.5024 36 28.5024H24.75C23.9544 28.5024 23.1913 28.1864 22.6287 27.6238C22.0661 27.0612 21.75 26.2981 21.75 25.5024ZM3 28.5024H14.25C15.0456 28.5024 15.8087 28.1864 16.3713 27.6238C16.9339 27.0612 17.25 26.2981 17.25 25.5024V13.5024C17.25 12.7068 16.9339 11.9437 16.3713 11.3811C15.8087 10.8185 15.0456 10.5024 14.25 10.5024H3V9.00244C3 7.41114 3.63214 5.88502 4.75736 4.7598C5.88258 3.63458 7.4087 3.00244 9 3.00244C9.39783 3.00244 9.77936 2.84441 10.0607 2.5631C10.342 2.2818 10.5 1.90027 10.5 1.50244C10.5 1.10462 10.342 0.723085 10.0607 0.44178C9.77936 0.160475 9.39783 0.00244141 9 0.00244141C6.61381 0.00492287 4.32607 0.95393 2.63878 2.64122C0.951488 4.32851 0.00248337 6.61625 0 9.00244V25.5024C0 26.2981 0.316071 27.0612 0.878681 27.6238C1.44129 28.1864 2.20435 28.5024 3 28.5024Z'
        fill='#111827'
      />
    </svg>
  );
};
