import { Button } from '@nextui-org/react';

import InputTextarea from '@components/UI/InputTextarea';
import Text from '@components/UI/Text';

import CardSetupBot from '../CardSetupBot';

const Installation = ({ errors, control }: any) => {
  return (
    <CardSetupBot
      title='Install the chatbot to your website'
      description='Copy and paste the following code to the <head> section on all pages of your site.'
    >
      <div className='flex flex-col gap-4'>
        <InputTextarea
          required
          name='script'
          errors={errors}
          minRows={5}
          control={control}
          placeholder='Enter a script'
          size='lg'
        />
        <div className='flex items-center gap-2'>
          <Button
            size='md'
            className='bg-white border-1 border-solid border-neutral-02'
            radius='sm'
          >
            <Text type='font-14-600'>Check Installation</Text>
          </Button>
          <Button
            size='md'
            className='bg-white border-1 border-solid border-neutral-02'
            radius='sm'
          >
            <Text type='font-14-600'>Copy</Text>
          </Button>
        </div>
      </div>
    </CardSetupBot>
  );
};
export default Installation;
