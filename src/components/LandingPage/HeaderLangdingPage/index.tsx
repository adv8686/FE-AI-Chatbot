import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

import Siderbar from './Siderbar';

const HeaderLangdingPage = ({ scrollY }: { scrollY: number }) => {
  const router = useRouter();
  return (
    <div
      className={clsx('sticky top-0 left-0 right-0 w-full', {
        'bg-[rgba(0_0_0_0.08)] backdrop-blur transition-all z-50': scrollY > 0,
      })}
    >
      <div className='container mx-auto flex justify-between items-center py-5'>
        <div className='flex items-center gap-2'>
          <Image src={'/images/logo-web.png'} alt='' width={40} height={32} className='w-10 h-8' />
          <Text type='font-18-600'>Demy.ai</Text>
        </div>
        <Siderbar />
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
  );
};
export default HeaderLangdingPage;
