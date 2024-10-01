/* eslint-disable import/no-cycle */
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import { AnimatedItem } from '..';
import { IconAvailability, IconEffortless, IconInsights } from './Icons';

const DATA_TRUSTED = [
  '/images/img-trusted-1.png',
  '/images/img-trusted-2.png',
  '/images/img-trusted-3.png',
  '/images/img-trusted-4.png',
  '/images/img-trusted-1.png',
  '/images/img-trusted-2.png',
];
const WhyDemy = () => {
  const router = useRouter();
  return (
    <div
      id='#why-demy'
      className='container m-auto flex flex-col gap-8 pt-[120px] px-4 md:px-0 md:pt-[150px]'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-6 md:gap-12'>
          <div className='flex flex-col md:gap-4'>
            <div className='relative z-50'>
              <AnimatedItem
                transition={{
                  duration: 0.4,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-60-600'>
                  Save 70% on Support with Custom{' '}
                  <Text className='text-indigo-500' element='span'>
                    AI Chatbots
                  </Text>
                </Text>
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.4,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <div className='absolute right-6 bottom-[-10px] md:bottom-[-6px] z-[-1]'>
                  <IconLightning />
                </div>
              </AnimatedItem>
            </div>

            <div className='flex flex-col gap-2 md:gap-6'>
              <AnimatedItem
                transition={{
                  duration: 0.5,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-18-400' className='text-secodary my-4 m:my-0'>
                  The #1 no-code platform for creating custom AI agents tailored to your business
                  needs. Effortlessly deflect support tickets, maximize employee efficiency, and
                  enhance customer interactions.
                </Text>
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.5,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <ItemContent
                  icon={<IconEffortless />}
                  text='Effortless customization, no coding required'
                />
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.6,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <ItemContent icon={<IconAvailability />} text='24/7 support availability' />
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.7,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <ItemContent icon={<IconInsights />} text='Data-driven insights' />
              </AnimatedItem>
            </div>
          </div>
          <AnimatedItem
            transition={{
              duration: 0.8,
              ease: 'linear',
              delay: 0.4,
            }}
          >
            <div className='flex items-center gap-2'>
              <Button
                type='button'
                radius='md'
                size='lg'
                className='bg-fill-accent'
                onClick={() => router.push(ROUTE_PATH.TEMPLATE_BOT)}
              >
                <Text type='font-14-600' className='text-white'>
                  Get Started for Free
                </Text>
              </Button>
              <Button
                type='button'
                radius='md'
                size='lg'
                className='bg-white border-1 border-solid border-indigo-shade'
                onClick={() => router.push(ROUTE_PATH.TEMPLATE_BOT)}
              >
                <Text type='font-14-600' className='text-indigo-700'>
                  Try a Demo
                </Text>
              </Button>
            </div>
          </AnimatedItem>
        </div>
        <AnimatedItem
          transition={{
            duration: 0.6,
            ease: 'linear',
            delay: 0.3,
          }}
        >
          <div className='flex md:justify-end justify-center items-center md:items-end md:mr-20'>
            <Image
              src={isMobile ? '/images/img-bot-preview-mobile.png' : '/images/img-bot-preview.png'}
              width={isMobile ? 358 : 384}
              height={isMobile ? 324 : 560}
              alt=''
              className='w-[358px] h-[324px] md:w-[384px] md:h-[560px] md:shadow-lg md:rounded-xl'
            />
          </div>
        </AnimatedItem>
      </div>
      <AnimatedItem
        transition={{
          duration: 0.8,
          ease: 'linear',
          delay: 0.3,
        }}
      >
        <div className='flex justify-center items-center flex-col gap-8'>
          <Image
            src={isMobile ? '/images/ic-arrow-mobile.png' : '/images/img-arrow.png'}
            width={1334}
            height={14}
            className='w-auto h-[14px]'
            alt=''
          />
          <Text className='uppercase' type='font-12-600'>
            trusted by 5000+ websites and counting
          </Text>
          <div className='flex items-center gap-8 overflow-auto scrollbar-hide'>
            {DATA_TRUSTED?.map((item) => {
              return (
                <Image key={item} alt='' src={item} width={89} height={24} className='w-auto h-6' />
              );
            })}
          </div>
        </div>
      </AnimatedItem>
    </div>
  );
};
export default WhyDemy;

export const ItemContent = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <div className='flex items-center gap-2'>
      {icon}
      <Text type='font-18-400' className='text-secodary'>
        {text}
      </Text>
    </div>
  );
};

const IconLightning = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-[180px] md:w-[270px] h-[28px]'
      viewBox='0 0 322 28'
      fill='none'
    >
      <path
        d='M16.7494 6.45463C4.40139 14.9206 1.85186 16.237 0.00570963 19.2446C0.0057073 20.4417 -0.12309 20.6308 0.842895 21.8279C8.79559 16.52 19.0678 9.03783 23.1893 10.928C27.3108 12.8181 29.3716 29.1154 38.3874 27.9394C44.6341 27.1245 42.9597 21.8909 56.0971 11.9991C59.8966 22.1429 66.5941 23.0801 70.7157 19.0556C72.0062 17.7955 75.2152 15.2863 77.7995 12.5661C79.2309 20.1907 85.2054 22.7729 88.6829 20.1897C91.8434 17.842 94.672 14.5823 99.0512 11.9991C110.514 26.1752 108.067 17.6695 124.36 10.424C135.115 31.0896 143.229 15.9054 155.787 10.739C167.958 31.6567 175.106 18.1106 187.471 10.739C194.104 27.1833 200.093 16.0944 212.007 9.10085C226.69 24.3481 229.394 13.3222 242.339 8.5968C252.836 27.9394 257.537 9.03784 271.447 9.60489C276.921 19.6227 283.388 17.7117 294.566 9.85691C294.566 9.85691 296.841 13.3238 299.847 13.8262C304.355 14.5796 304.355 12.6921 312.276 9.03784C315.238 7.67118 317.191 6.53533 322 6.13961V1.72923C317.871 2.37369 314.337 2.12019 311.181 3.87143C303.289 8.25124 300.983 6.66214 299.46 4.31246C298.898 3.44465 299.055 2.5789 298.559 1.72923C295.21 -4.00414 286.581 6.20259 278.788 8.02973C274.216 -2.68113 261.723 0.532171 250.453 8.34478C250.453 8.34478 247.362 1.78717 243.627 0.532177C237.251 -1.60997 231.391 3.6824 223.856 8.34478C220.44 10.4588 215.098 0.784181 211.427 0.784181C205.889 0.784181 194.619 10.2349 194.619 10.2349C194.619 10.2349 194.443 4.73549 190.884 2.67433C183.736 -1.46541 173.561 11.117 167.958 13.3852C162.17 15.7284 164.416 6.32129 158.685 2.80034C152.953 -0.720618 137.884 12.5661 134.084 12.8181C131.828 12.9678 130.542 3.68241 125.97 2.67433C118.322 0.988115 106.457 11.117 106.457 11.117C106.457 11.117 103.817 4.8795 99.0512 3.68241C93.3792 2.25762 85.2054 11.7471 85.2054 11.7471C85.2054 11.7471 86.0426 3.68241 80.5043 2.10728C77.1627 1.15691 63.8894 13.1332 63.8894 13.1332C63.8894 13.1332 61.4253 6.49992 57.1275 4.24946C51.9112 1.51805 41.0922 16.1574 36.5199 20.5047C33.8222 23.0697 29.0974 -2.01136 16.7494 6.45463Z'
        fill='#FFAA02'
      />
    </svg>
  );
};
