/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const Settings = () => {
  const { control, handleSubmit } = useForm<any>({});
  const onSubmit = (values: any) => {
    console.log(values, 'values');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-6'>
        <div className='col-span-4 flex flex-col gap-8'>
          <Text type='font-24-600'>Settings</Text>
          <div className='flex flex-col gap-4'>
            <div className='border-1 border-solid border-neutral-01 rounded-lg flex flex-col gap-4 p-6'>
              <div>
                <Text type='font-18-600'>Change Password</Text>
                <Text type='font-14-400' className='text-neutral'>
                  Change your password by providing your old and new password.
                </Text>
              </div>
              <InputText
                name='previous_Password'
                label='Previous Password'
                control={control}
                placeholder='Enter Previous Password'
                size='lg'
              />
              <InputText
                name='new_password'
                label='New Password'
                control={control}
                placeholder='Enter New Password'
                size='lg'
              />
              <InputText
                name='confirm_password'
                label='Confirm New Password'
                control={control}
                placeholder='Enter Confirm New Password'
                size='lg'
              />
              <Button type='submit' radius='sm' size='lg' className='bg-black w-max'>
                <Text type='font-14-600' className='text-white'>
                  Change Password
                </Text>
              </Button>
            </div>
            <div className='border-1 border-solid border-neutral-01 rounded-lg flex flex-col gap-4 p-6'>
              <div>
                <Text type='font-18-600'>Billing</Text>
                <Text type='font-14-400' className='text-neutral'>
                  Manage your subscription and payment method.
                </Text>
              </div>
              <Button type='submit' radius='sm' size='lg' className='bg-black w-max'>
                <Text type='font-14-600' className='text-white'>
                  Manage Billing
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Settings;
