import { useForm } from 'react-hook-form';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import CardBotSetting from './CardBotSetting';
import CardChatVolume from './CardChatVolume';
import CardConversionRate from './CardConversionRate';
import CardCustomerTrendTopic from './CardCustomerTrendTopic';
import CardOrderNumber from './CardOrderNumber';

const Dashboard = () => {
  const { control } = useForm<any>({});
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <Text type='font-24-600'>Dashboard</Text>
        <div className='flex items-center gap-2'>
          <CustomSelect
            control={control}
            className='min-w-[192px] '
            radius='md'
            size='lg'
            placeholder='All country'
            options={[
              {
                value: 1,
                label: 'Country 1',
              },
              {
                value: 2,
                label: 'Country 2',
              },
              {
                value: 3,
                label: 'Country 3',
              },
            ]}
          />
          <CustomSelect
            className='min-w-[192px]'
            control={control}
            radius='md'
            size='lg'
            placeholder='All date'
            options={[
              {
                value: 1,
                label: 'Date 1',
              },
              {
                value: 2,
                label: 'Date 2',
              },
              {
                value: 3,
                label: 'Date 3',
              },
            ]}
          />
        </div>
      </div>
      <CardBotSetting />
      <div className='grid grid-cols-2 gap-4'>
        <CardConversionRate />
        <CardOrderNumber />
        <CardCustomerTrendTopic />
        <CardChatVolume />
      </div>
    </div>
  );
};
export default Dashboard;
