/* eslint-disable import/no-cycle */
/* eslint-disable multiline-ternary */
import { useState } from 'react';

import { Button, Tab, Tabs } from '@nextui-org/react';
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import { AnimatedItem } from '..';
import { IconDiamond, IconStarter } from '../WhyDemy/Icons';

export enum TAB_PRICING {
  BILL_MONTHLY = 'BILL_MONTHLY',
  BILL_YEAR = 'BILL_YEAR',
}

const Pricing = () => {
  const router = useRouter();
  const [tab, setTab] = useState(TAB_PRICING?.BILL_MONTHLY);
  const onChangeTab = (tab: any) => {
    setTab(tab);
  };

  const DATA_PRICING = [
    {
      id: 1,
      title: 'Free',
      money: '$0',
      functional: [
        {
          id: 1,
          label: 'Website chat widget',
          satisfied: true,
        },
        {
          id: 2,
          label: 'Unlimited conversations',
          satisfied: true,
        },
        {
          id: 3,
          label: 'Shopify integration',
          satisfied: false,
        },
        {
          id: 4,
          label: 'Messenger integration',
          satisfied: false,
        },
        {
          id: 5,
          label: 'Instagram integration',
          satisfied: false,
        },
        {
          id: 6,
          label: 'Custom domain',
          satisfied: false,
        },
        {
          id: 7,
          label: 'Audio and Video Chat',
          satisfied: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Starter',
      money: tab === TAB_PRICING?.BILL_MONTHLY ? '$19' : '$15$',
      functional: [
        {
          id: 1,
          label: 'Website chat widget',
          satisfied: true,
        },
        {
          id: 2,
          label: 'Unlimited conversations',
          satisfied: true,
        },
        {
          id: 3,
          label: 'Shopify integration',
          satisfied: true,
        },
        {
          id: 4,
          label: 'Messenger integration',
          satisfied: false,
        },
        {
          id: 5,
          label: 'Instagram integration',
          satisfied: false,
        },
        {
          id: 6,
          label: 'Custom domain',
          satisfied: false,
        },
        {
          id: 7,
          label: 'Audio and Video Chat',
          satisfied: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Pro',
      money: tab === TAB_PRICING?.BILL_MONTHLY ? '$99' : '$89$',
      functional: [
        {
          id: 1,
          label: 'Website chat widget',
          satisfied: true,
        },
        {
          id: 2,
          label: 'Unlimited conversations',
          satisfied: true,
        },
        {
          id: 3,
          label: 'Shopify integration',
          satisfied: true,
        },
        {
          id: 4,
          label: 'Messenger integration',
          satisfied: true,
        },
        {
          id: 5,
          label: 'Instagram integration',
          satisfied: true,
        },
        {
          id: 6,
          label: 'Custom domain',
          satisfied: false,
        },
        {
          id: 7,
          label: 'Audio and Video Chat',
          satisfied: false,
        },
      ],
    },
  ];

  const handleClickPricing = (index: number) => {
    if (index === 0) {
      router.push(ROUTE_PATH.TEMPLATE_BOT);
    }
  };

  return (
    <div
      id='#pricing'
      className='md:bg-[url("/images/bg-how-it-work.png")] h-max bg-no-repeat bg-cover'
    >
      <div className='container m-auto px-4 md:px-0 py-[48px] md:py-[128px]'>
        <div className='flex flex-col gap-9 items-center'>
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
                  Pricing
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
                Affordable Plans Tailored
                <br /> to Your Needs
              </Text>
            </AnimatedItem>
            <AnimatedItem
              transition={{
                duration: 0.5,
                ease: 'linear',
                delay: 0.4,
              }}
            >
              <Text type='font-18-400' className='text-secodary px-8 md:px-0'>
                Explore our range of plans designed to suit every budget and help you maximize your
                chatbot’s potential.
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
            <div className='flex flex-col items-center justify-center gap-8 md:gap-16'>
              <Tabs
                classNames={{
                  tabList: ['bg-white border-1 border-solid border-indigo-shade'],
                  tab: ['h-[46px] w-[134px] shadow-none'],
                  cursor: ['bg-[#E0E7FF]'],
                  tabContent: ['group-data-[selected=true]:text-[#4338CA]'],
                }}
                selectedKey={tab}
                onSelectionChange={onChangeTab}
                size='lg'
                radius='sm'
                aria-label='Tabs form'
              >
                <Tab
                  key={TAB_PRICING?.BILL_MONTHLY}
                  title={
                    <Text
                      className={clsx('text-black', {
                        '!text-indigo-500': tab === TAB_PRICING?.BILL_MONTHLY,
                      })}
                      type='font-16-600'
                    >
                      Bill Monthly
                    </Text>
                  }
                />
                <Tab
                  key={TAB_PRICING?.BILL_YEAR}
                  title={
                    <div className='flex items-center gap-2'>
                      <Text
                        className={clsx('text-black', {
                          '!text-indigo-500': tab === TAB_PRICING.BILL_YEAR,
                        })}
                        type='font-16-600'
                      >
                        Bill Yearly
                      </Text>
                      <Text type='font-14-400' className='text-[#22C55E]'>
                        -20%
                      </Text>
                    </div>
                  }
                />
              </Tabs>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {DATA_PRICING?.map((item, index) => {
                  return (
                    <div
                      className='shadowCardPricing relative bg-white rounded-2xl p-8 flex flex-col justify-between gap-8'
                      key={item?.id}
                    >
                      <div className='flex flex-col gap-6 items-center text-center justify-center'>
                        <Text type='font-14-400' className='uppercase'>
                          {item?.title}
                        </Text>
                        {index === 1 ? <IconStarter /> : <IconDiamond />}
                        <div className='flex flex-col gap-4'>
                          <Text type='font-60-600' className='text-indigo-500'>
                            {item?.money}
                            <Text type='font-20-600' element='span'>
                              {index === 0 ? '/Forever' : '/Forever'}
                            </Text>
                          </Text>
                          <Text type='font-14-400' className='text-disabled'>
                            For personal websites and anyone who wants a basic chat to communicate
                          </Text>
                        </div>
                      </div>
                      <div className='flex flex-col gap-4'>
                        {item?.functional?.map((el) => {
                          return (
                            <div key={item?.id} className='flex items-center gap-2'>
                              {el?.satisfied ? (
                                <CheckCircle size={24} color='#22C55E' weight='fill' />
                              ) : (
                                <XCircle size={24} color='#14141499' />
                              )}

                              <Text type='font-18-400' className='text-secodary'>
                                {el?.label}
                              </Text>
                            </div>
                          );
                        })}
                      </div>
                      <Button
                        type='button'
                        radius='md'
                        onClick={() => handleClickPricing(index)}
                        size='lg'
                        className='bg-[#6366F1] min-h-[60px]'
                      >
                        <Text type='font-14-600' className='text-white'>
                          {index === 0 ? 'Get Started' : 'Start 14-day Free Trial'}
                        </Text>
                      </Button>
                      {index === 2 && (
                        <div className='bg-[#FFAA02] absolute top-3 right-4 rounded-full py-2 px-3 h-[32px] flex justify-center items-center gap-1'>
                          <IconHeart />
                          <Text type='font-14-400'>Popular</Text>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  );
};
export default Pricing;

const IconHeart = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <g clipPath='url(#clip0_15858_26329)'>
        <path
          d='M8 13.9985C8 13.9985 1.5 10.4985 1.5 6.37354C1.5 5.47843 1.85558 4.61999 2.48851 3.98705C3.12145 3.35411 3.97989 2.99854 4.875 2.99854C6.28688 2.99854 7.49625 3.76791 8 4.99854C8.50375 3.76791 9.71312 2.99854 11.125 2.99854C12.0201 2.99854 12.8785 3.35411 13.5115 3.98705C14.1444 4.61999 14.5 5.47843 14.5 6.37354C14.5 10.4985 8 13.9985 8 13.9985Z'
          stroke='black'
          strokeWidth='1.3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15858_26329'>
          <rect width='16' height='16' fill='white' transform='translate(0 -0.00146484)' />
        </clipPath>
      </defs>
    </svg>
  );
};
