/* eslint-disable unicorn/prefer-query-selector */
import { useState } from 'react';

import clsx from 'clsx';

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
const Siderbar = () => {
  const [activeMenu, setActiveMenu] = useState('#why-demy');
  const handleClickMenu = (id: string) => {
    setActiveMenu(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='flex items-center gap-4'>
      {MENUS?.map((item) => {
        return (
          <div
            onClick={() => handleClickMenu(item?.href)}
            key={item?.key}
            className='py-2 px-3 group'
          >
            <Text
              type='font-14-600'
              className={clsx('cursor-pointer group-hover:text-accent transition-all', {
                '!text-accent': item?.href === activeMenu,
              })}
            >
              {item?.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
export default Siderbar;
