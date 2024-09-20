/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unicorn/no-null */

import clsx from 'clsx';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH, THEME_BOT } from '@utils/common';

const DATA_THEME_BOT = [
  {
    id: 1,
    url: '/images/bot-theme-default.png',
    value: THEME_BOT?.DEFAULT,
  },
  {
    id: 2,
    url: '/images/bot-theme-halloween.png',
    value: THEME_BOT?.HALLOWEEN,
  },
  {
    id: 3,
    url: '/images/bot-theme-lemon.png',
    value: THEME_BOT?.LEMON,
  },

  {
    id: 4,
    url: '/images/bot-theme-valentine.png',
    value: THEME_BOT?.VALENTINE,
  },
  {
    id: 5,
    url: '/images/bot-theme-cyberpunk.png',
    value: THEME_BOT?.CYBERPUNK,
  },
  {
    id: 6,
    url: '/images/bot-theme-coffee.png',
    value: THEME_BOT?.COFFEE,
  },
  {
    id: 7,
    url: '/images/bot-theme-luxury.png',
    value: THEME_BOT?.LUXURY,
  },
  {
    id: 8,
    url: '/images/bot-theme-retro.png',
    value: THEME_BOT?.RETRO,
  },
];

const TemplateBot = () => {
  const router = useRouter();
  const handleSelectTheme = (value: THEME_BOT) => {
    router.push({ pathname: ROUTE_PATH.CREATE_BOT, query: { theme: value } });
  };
  return (
    <div className='flex flex-col gap-12 mt-6'>
      <div className='flex flex-col gap-1 text-center items-center'>
        <Text type='font-24-600'>Welcome to Demy.ai! Let’s create your AI chatbot</Text>
        <Text type='font-16-400' className='text-neutral'>
          Choose a template to get started and enhance your customer support effortlessly.
        </Text>
      </div>
      <div className='grid grid-cols-4 gap-6'>
        {DATA_THEME_BOT?.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => handleSelectTheme(item?.value)}
              style={{
                backgroundImage: `url(${item?.url})`,
              }}
              className={clsx(
                'w-full  hover:opacity-80 cursor-pointer h-[393px] bg-cover bg-center',
              )}
            />
            // <Image
            //   key={item?.id}
            //   src={item?.url}
            //   alt=''
            //   className='w-full h-[393px]'
            //   height={393}
            //   width={270}
            // />
          );
        })}
      </div>
    </div>
  );
};
export default TemplateBot;
