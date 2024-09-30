import { Button } from '@nextui-org/react';

import Text from '@components/UI/Text';

const FooterLangdingpage = () => {
  return (
    <div className='container m-auto py-4'>
      <div className='py-3 flex justify-between items-center'>
        <Text type='font-14-400' className='text-neutral'>
          Copyright © 2024 by{' '}
          <Text element='span' className='text-black font-medium'>
            Demy.ai.
          </Text>{' '}
          All rights reserved.
        </Text>
        <div className='flex items-center gap-4'>
          <Text type='font-14-400' className='text-secodary'>
            Term of Services
          </Text>
          <Text type='font-14-400' className='text-secodary'>
            Cookie Policy
          </Text>

          <Text type='font-14-400' className='text-secodary'>
            Contact Us
          </Text>
          <div className='flex items-center gap-2'>
            <Button isIconOnly variant='light' size='md' radius='full'>
              <IconFacebook />
            </Button>
            <Button isIconOnly variant='light' size='md' radius='full'>
              <IconX />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterLangdingpage;

const IconFacebook = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
      <path
        d='M25.4914 34V24.8777H28.4385L28.8807 21.3216H25.4914V19.0515C25.4914 18.0222 25.7655 17.3208 27.1883 17.3208L29 17.32V14.1392C28.6867 14.0969 27.6112 14 26.3595 14C23.7456 14 21.9561 15.657 21.9561 18.6993V21.3216H19V24.8777H21.9561V34H25.4914Z'
        fill='#1E1F20'
      />
    </svg>
  );
};

const IconX = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none'>
      <path
        d='M15.7512 0.962891H18.818L12.1179 8.62061L20 19.041H13.8284L8.99458 12.7211L3.46359 19.041H0.394938L7.5613 10.8502L0 0.962891H6.32828L10.6976 6.73956L15.7512 0.962891ZM14.6748 17.2054H16.3742L5.4049 2.7021H3.58133L14.6748 17.2054Z'
        fill='#1E1F20'
      />
    </svg>
  );
};
