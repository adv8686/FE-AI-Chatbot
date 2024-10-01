import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

const CardFooter = () => {
  const router = useRouter();

  return (
    <div className='container m-auto px-4 md:px-0 '>
      <div className='bg-[url("/images/bg-card-footer.png")]  flex-col gap-[50px] flex justify-center items-center text-center rounded-3xl w-full   bg-cover  h-max py-[40px] md:py-[80px]'>
        <div className='w-[72px] h-[72px] flex justify-center items-center shadow-lg rounded-xl bg-white'>
          <Image src={'/images/logo-web.png'} alt='' width={40} height={32} className='w-10 h-8' />
        </div>
        <div className='flex flex-col gap-6'>
          <Text className='text-white' type='font-48-600'>
            Move Beyond
            <br />
            Rule-Based Chatbots
          </Text>
          <div className='flex flex-col gap-8 justify-center items-center text-center'>
            <Text className='text-white opacity-70' type='font-18-400'>
              Join the revolution and elevate your customer engagement with Demy.ai.
              <br /> Create your custom AI chatbot today and watch your business thrive
            </Text>
            <Button
              type='button'
              radius='md'
              size='lg'
              className='bg-[#6366F1] w-max min-h-[60px]'
              onClick={() => router.push(ROUTE_PATH.TEMPLATE_BOT)}
            >
              <Text type='font-14-600' className='text-white'>
                Get Started Now
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardFooter;
