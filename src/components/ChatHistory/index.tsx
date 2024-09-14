/* eslint-disable unicorn/no-null */

import { useForm } from 'react-hook-form';

import DatePickerCustom from '@components/UI/DatePickerCustom';
import Text from '@components/UI/Text';

import ContentChat from './ContentChat';

const ChatHistory = () => {
  const { control } = useForm<any>({});
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <Text type='font-24-600'>Chat History</Text>
        <div className='flex items-center gap-2'>
          <DatePickerCustom
            className='min-w-[192px]'
            radius='sm'
            size='lg'
            startContent={
              <Text type='font-14-400' className='text-secodary w-[140px]'>
                Start date:
              </Text>
            }
            name='start_date'
          />
          <DatePickerCustom
            className='min-w-[192px]'
            radius='sm'
            size='lg'
            name='end_date'
            startContent={
              <Text type='font-14-400' className='text-secodary w-[140px]'>
                End date:
              </Text>
            }
          />
        </div>
      </div>
      <ContentChat control={control} />
    </div>
  );
};
export default ChatHistory;
