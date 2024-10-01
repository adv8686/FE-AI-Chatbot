import { useState } from 'react';

import { Button } from '@nextui-org/react';
import { List } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import MenuMobile from './MenuMobile';
import Siderbar from './Siderbar';

const HeaderLangdingPage = ({ scrollY }: { scrollY: number }) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div
      className={clsx('sticky top-0 z-[1000] left-0 right-0 w-full', {
        'bg-[rgba(0_0_0_0.08)] backdrop-blur transition-all z-50': scrollY > 0,
      })}
    >
      <div className='container mx-auto flex justify-between md:border-b-0 border-b-1 border-solid border-b-neutral-01 items-center px-4 md:px-0 py-3 md:py-5'>
        <div className='flex items-center gap-2'>
          <Image src={'/images/logo-web.png'} alt='' width={40} height={32} className='w-10 h-8' />
          <Text type='font-18-600'>Demy.ai</Text>
        </div>
        <div className='hidden md:block'>
          <Siderbar />
        </div>
        <div className='block md:hidden' onClick={() => setIsDrawerOpen(true)}>
          <List size={24} />
        </div>

        <div className='hidden md:block'>
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
        </div>
      </div>
      <MenuMobile onClose={() => setIsDrawerOpen(false)} isDrawerOpen={isDrawerOpen} />
    </div>
  );
};
export default HeaderLangdingPage;
