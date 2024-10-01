/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
import { Accordion, AccordionItem } from '@nextui-org/react';
import clsx from 'clsx';

import Text from '@components/UI/Text';

import { AnimatedItem } from '..';

const DATA_FAQS = [
  {
    id: 1,
    title: 'Do I need technical skills to use the chatbot?',
    content:
      'No. You will not be required to be highly technical to get on board with our chatbot. The platform is intuitively designed to allow easy setup and management of the chatbot. It’s easy to set up within 3 minutes with our premade functions. However, if you would want to customize or extend the functionality of your chatbot, general basic technical knowledge might help, though is not necessary.',
  },
  {
    id: 2,
    title: 'Can the chatbot be integrated with my systems?',
    content:
      'It can be integrated with various systems, including but not limited to CRM, e-commerce platforms, customer support software, and more. It supports API integration with seamless compatibility with major platforms like Slack, Zendesk, and Shopify among others for smooth data exchange and automation of workflows.',
  },
  {
    id: 3,
    title: 'How much does it cost?',
    content:
      "Our pricing model is flexible, devised to suit businesses of every different size. We offer tiered pricing, starting with free basic plans, scaling prices based on the number of conversations, advanced features, and custom integrations. You only pay for what you need, so it's affordable to get started for startups yet scalable for enterprises.",
  },
  {
    id: 4,
    title: "What's included in the free plan?",
    content: `The Free Plan includes core chatbot functionality, a capacity for up to 50 conversations per month, integration with one platform example, your website-basic customization via templates, basic analytics for performance tracking, and community support with documentation and forums.
What will happen after I have completed 50 conversations? It stops once you hit the 50-conversation limit per month, but one could always upgrade for more conversations.
What support is available? Community support includes online forums and resources. For direct support, upgrade to a paid plan.`,
  },
  {
    id: 5,
    title: 'How secure is my data?',
    content:
      'Your data is securely encrypted and handled according to industry-standard protocols. We prioritize data privacy and comply with all relevant data protection regulations',
  },
  {
    id: 6,
    title: 'Can the chatbot handle multiple languages?',
    content:
      'Yes, the chatbot can interact in multiple languages depending on the region or user preference. It leverages NLP to understand and respond in different languages, enhancing its usability across diverse markets.',
  },
];

const FAQ = () => {
  return (
    <div
      id='#faq'
      className='md:bg-[url("/images/bg-how-it-work.png")] h-max bg-no-repeat bg-cover'
    >
      <div className='container grid grid-cols-1 md:grid-cols-6 gap-8 m-auto px-4 md:px-0 pb-[48px] md:py-[128px]'>
        <div className='md:col-span-2 items-center md:items-start text-center md:text-start flex flex-col gap-8'>
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
              <Text type='font-18-400' className='text-secodary px-4 md:px-0'>
                We’ve compiled answers to the most common questions to ensure you have all the info
                you need to get started with Demy.ai.
              </Text>
            </div>
          </AnimatedItem>
        </div>

        <div className='md:col-span-4 md:pl-16'>
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
                    <Text className='text-secodary text-[14px] md:text-[16px] font-normal w-[90%]'>
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
