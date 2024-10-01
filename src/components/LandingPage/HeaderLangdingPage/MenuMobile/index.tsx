/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unicorn/prefer-query-selector */
import { useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import Drawer from '@components/UI/Drawer';
import Text from '@components/UI/Text';

const MENUS = [
  {
    key: 1,
    label: 'Why Demy',
    href: '#why-demy',
  },
  {
    key: 2,
    label: 'How it Work?',
    href: '#it-work',
  },
  {
    key: 3,
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    key: 4,
    label: 'Pricing',
    href: '#pricing',
  },
  {
    key: 5,
    label: 'FAQ',
    href: '#faq',
  },
];

const MenuMobile = ({
  onClose,
  isDrawerOpen,
}: {
  onClose: VoidFunction;
  isDrawerOpen: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState('#why-demy');

  const handelRedirectPage = (url: string) => {
    setActiveMenu(url);

    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  return (
    <Drawer isOpen={isDrawerOpen} onClose={onClose}>
      <div className='flex items-center gap-2 border-b border-solid border-neutral-01 p-4'>
        <Image src={'/images/logo-web.png'} alt='' width={40} height={32} className='w-10 h-8' />
        <Text type='font-18-600'>Demy.ai</Text>
      </div>
      <div className='flex flex-col gap-6 p-4 z-[1000] opacity-[1]'>
        {MENUS?.map((item) => {
          return (
            <div
              key={item?.key}
              onClick={() => handelRedirectPage(item.href)}
              className='cursor-pointer'
            >
              <Text
                className={clsx('hover:!text-accent', {
                  '!text-accent': activeMenu === item?.href,
                })}
                type='font-14-600'
              >
                {item?.label}
              </Text>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};
export default MenuMobile;
