import React, { useMemo } from 'react';

import { Avatar } from '@nextui-org/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';

const MENUS = [
  {
    key: 1,
    href: '/',
    title: 'Dashboard',
  },
  {
    key: 2,
    href: '/chat-history',
    title: 'Chat History',
  },
  {
    key: 3,
    href: '/manage-faqs',
    title: 'Manage FAQs',
  },
  {
    key: 4,
    href: '/settings',
    title: 'Settings',
  },
];

const Header = ({ scrollY }: { scrollY: number }) => {
  const router = useRouter();
  const pathName = useMemo(() => {
    return router.pathname;
  }, [router]);

  return (
    <div
      className={clsx('w-full border-b  border-b-neutral-01 border-solid sticky top-0 z-50', {
        'backdrop-blur  transition-all border-b-0': scrollY > 0,
      })}
    >
      <div className='container m-auto px-6 py-3 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='rounded-lg bg-neutral-02 w-16 h-9 flex justify-center items-center'>
            <Text type='font-10-500' className='text-disabled'>
              LOGO
            </Text>
          </div>
          <div className='flex'>
            {MENUS?.map((item) => {
              return (
                <div
                  key={item?.key}
                  className='group cursor-pointer transition-all py-2 px-3 flex justify-center items-center'
                >
                  <Text
                    type='font-14-600'
                    className={clsx('text-black group-hover:text-accent', {
                      '!text-accent': pathName === item?.href,
                    })}
                  >
                    {item?.title}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
        <Avatar className='w-10 h-10' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
      </div>
    </div>
  );
};

export default Header;
