import { Accordion, AccordionItem } from '@nextui-org/react';
import clsx from 'clsx';

import Text from '@components/UI/Text';

import { AnimatedItem } from '..';

const DATA_FAQS = [
  {
    id: 1,
    title: 'Do I need technical skills?',
    content:
      'Not at all! Join the 95% of our users who have no technical background but successfully use Demy.ai.',
  },
  {
    id: 2,
    title: 'Can I integrate with my existing systems?',
    content:
      'Not at all! Join the 95% of our users who have no technical background but successfully use Demy.ai.',
  },
  {
    id: 3,
    title: 'Is there a free trial?',
    content:
      'Not at all! Join the 95% of our users who have no technical background but successfully use Demy.ai.',
  },
  {
    id: 4,
    title: 'How does pricing work?',
    content:
      'Not at all! Join the 95% of our users who have no technical background but successfully use Demy.ai.',
  },
  {
    id: 5,
    title: 'What’s included in the free plan?',
    content:
      'Not at all! Join the 95% of our users who have no technical background but successfully use Demy.ai.',
  },
];

const FAQ = () => {
  return (
    <div className='bg-[url("/images/bg-how-it-work.png")] h-max bg-no-repeat bg-cover'>
      <div className='container grid grid-cols-6 gap-8 m-auto py-[128px]'>
        <div className='col-span-2 flex flex-col gap-8'>
          <AnimatedItem
            transition={{
              duration: 0.3,
              ease: 'linear',
              delay: 0.4,
            }}
          >
            <div className='border-1 w-max h-[36px] border-solid border-indigo-500 rounded-lg py-2 px-3'>
              <Text type='font-14-400' className='uppercase text-indigo-500'>
                FAQ
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
            <div className='flex flex-col gap-4'>
              <Text type='font-48-600'>Your Questions, Answered</Text>
              <Text type='font-18-400' className='text-secodary'>
                We’ve compiled answers to the most common questions to ensure you have all the info
                you need to get started with Demy.ai.
              </Text>
            </div>
          </AnimatedItem>
        </div>

        <div className='col-span-4 pl-16'>
          <AnimatedItem
            transition={{
              duration: 0.6,
              ease: 'linear',
              delay: 0.4,
            }}
          >
            <Accordion
              itemClasses={{
                content: ['py-0 pb-4'],
                indicator: ['data-[open=true]:rotate-[360deg]'],
              }}
              defaultExpandedKeys={['1']}
              variant='light'
            >
              {DATA_FAQS?.map((item) => {
                return (
                  <AccordionItem
                    key={item?.id}
                    indicator={({ isOpen }) =>
                      isOpen ? <IconMinus isOpen={isOpen} /> : <IconPlus />
                    }
                    classNames={{
                      indicator: ['border-[#F0F1F2]'],
                    }}
                    aria-label='Accordion 1'
                    title={
                      <Text className='text-black' type='font-20-600'>
                        {item?.title}
                      </Text>
                    }
                  >
                    <Text className='text-secodary text-[16px] font-normal w-[80%]'>
                      {item?.content}
                    </Text>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AnimatedItem>
        </div>
      </div>
    </div>
  );
};
export default FAQ;

const IconPlus = () => {
  return (
    <div className='bg-[#F0F1F2] rounded-full w-8 h-8 flex justify-center items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
      >
        <path d='M1 7.00195H13' stroke='#1E1F20' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M7 1.00195V13.002' stroke='#1E1F20' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </div>
  );
};

const IconMinus = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={clsx('flex justify-center items-center bg-[#F0F1F2] rounded-full w-8 h-8', {
        '!bg-indigo-500': isOpen,
      })}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='14' height='2' viewBox='0 0 14 2' fill='none'>
        <path
          d='M1 1.00195H13'
          stroke={isOpen ? 'white' : '#1E1F20'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};
