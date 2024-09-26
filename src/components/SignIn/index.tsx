/* eslint-disable unicorn/consistent-function-scoping */
import { Button, Checkbox } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const SignIn = () => {
  const { control } = useForm<any>({});

  const handleLoginWithGoogle = () => {
    window.open('https://be-aibot-dev.joomlart.com/api/auth/google/redirect');
  };

  return (
    <div className='w-6/12 mx-auto flex flex-col gap-12 h-screen items-center justify-center'>
      <div className='flex flex-col gap-4 w-full items-center'>
        <div className='rounded-lg bg-neutral-02 w-16 h-9 flex justify-center items-center'>
          <Text type='font-10-500' className='text-disabled'>
            LOGO
          </Text>
        </div>
        <div className='flex flex-col gap-2 text-center'>
          <Text className='text-[30px] font-semibold leading-9 text-black'>Sign into Demy</Text>
          <Text type='font-14-400' className='text-neutral'>
            Or{' '}
            <Text element='span' className='underline text-neutral cursor-pointer'>
              create you account
            </Text>
          </Text>
        </div>
      </div>
      <div className='w-[480px] p-12 flex flex-col gap-5 rounded-2xl border-1 border-solid border-neutral-01 shadow-lg'>
        <Button
          size='lg'
          radius='md'
          className='bg-white border-1 border-solid border-neutral-01 w-full'
          onClick={handleLoginWithGoogle}
        >
          <IconGoogle />
          <Text type='font-16-600'>Sign in with Google</Text>
        </Button>
        <div className='flex items-center gap-2'>
          <div className='flex-auto h-[1px] bg-neutral-01' />

          <Text type='font-12-400' className='text-neutral'>
            or use your email
          </Text>

          <div className='flex-auto h-[1px] bg-neutral-01' />
        </div>
        <div className='flex items-center flex-col gap-3'>
          <InputText
            control={control}
            name='email'
            label='Email'
            size={'lg'}
            placeholder='Enter your email'
          />
          <InputText
            control={control}
            name='password'
            label='Password'
            size={'lg'}
            placeholder='Enter your password'
          />
          <div className='flex items-center justify-between w-full mt-2'>
            <Checkbox
              size='lg'
              radius='sm'
              classNames={{
                wrapper:
                  'before:border-neutral-02 before:border-2  group-data-[hover=true]:before:bg-transparent group-data-[selected=true]:after:bg-accent',
              }}
            >
              <Text type='font-14-600'>Remember me</Text>
            </Checkbox>
            <Text type='font-14-400' className='text-accent hover:underline cursor-pointer'>
              Forgot Password?
            </Text>
          </div>
          <Button size='lg' radius='md' className='bg-black w-full mt-3'>
            <Text className='text-white' type='font-14-600'>
              Sign in with Google
            </Text>
          </Button>

          <div className='flex items-center justify-center mt-3'>
            <Text type='font-14-400' className='text-neutral'>
              Doesn’t have account yet?{' '}
              <Text element='span' className='text-black underline cursor-pointer'>
                Sign Up
              </Text>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;

const IconGoogle = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <path
        d='M15.8299 8.1813C15.8299 7.65464 15.7833 7.15464 15.7033 6.66797H8.16992V9.67464H12.4833C12.2899 10.6613 11.7233 11.4946 10.8833 12.0613V14.0613H13.4566C14.9633 12.668 15.8299 10.6146 15.8299 8.1813Z'
        fill='#4285F4'
      />
      <path
        d='M8.17027 16.0007C10.3303 16.0007 12.1369 15.2807 13.4569 14.0607L10.8836 12.0607C10.1636 12.5407 9.25027 12.834 8.17027 12.834C6.08361 12.834 4.31694 11.4273 3.68361 9.52734H1.03027V11.5873C2.34361 14.2007 5.04361 16.0007 8.17027 16.0007Z'
        fill='#34A853'
      />
      <path
        d='M3.68326 9.52739C3.51659 9.04739 3.42992 8.53406 3.42992 8.00073C3.42992 7.46739 3.52326 6.95406 3.68326 6.47406V4.41406H1.02992C0.483255 5.49406 0.169922 6.70739 0.169922 8.00073C0.169922 9.29406 0.483255 10.5074 1.02992 11.5874L3.68326 9.52739Z'
        fill='#FBBC05'
      />
      <path
        d='M8.17027 3.16667C9.35027 3.16667 10.4036 3.57334 11.2369 4.36667L13.5169 2.08667C12.1369 0.793334 10.3303 0 8.17027 0C5.04361 0 2.34361 1.8 1.03027 4.41334L3.68361 6.47334C4.31694 4.57334 6.08361 3.16667 8.17027 3.16667Z'
        fill='#EA4335'
      />
    </svg>
  );
};
