import { ReactNode } from 'react';

import Text from '@components/UI/Text';

const CardSetupBot = ({
  title,
  description,
  children,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className='bg-white rounded-lg border-1 border-solid border-neutral-01 p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <Text type='font-18-600'>{title}</Text>
        <Text type='font-14-400' className='text-neutral'>
          {description}
        </Text>
      </div>
      {children}
    </div>
  );
};
export default CardSetupBot;
