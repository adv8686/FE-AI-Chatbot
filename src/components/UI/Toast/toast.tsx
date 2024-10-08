/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { toast as t } from 'sonner';

// import { Icon } from '~components/UI/IconFont/Icon';

import Text from '../Text';

export const toast = {
  success: (message: string) => {
    t.custom((id) => (
      <div className='flex items-center w-full gap-3 max-w-xs p-3 text-gray-500 bg-[#EBF3DF] rounded-lg shadow'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <CheckCircle size={24} color='#3E8800' weight='fill' />
        </div>
        <Text type='font-14-400' className='text-black'>
          {message}
        </Text>
      </div>
    ));
  },

  error: (message: string) => {
    t.custom((id) => (
      <div className='flex items-center w-full gap-3 max-w-xs p-3  text-gray-500 bg-[#daa4a4] rounded-lg shadow'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <XCircle size={24} color='#bc2424' weight='fill' />
        </div>
        <Text type='font-14-400' className='text-black'>
          {message}
        </Text>
      </div>
    ));
  },
};
