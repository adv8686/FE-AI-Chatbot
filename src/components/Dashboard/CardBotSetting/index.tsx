import { Button } from '@nextui-org/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Card from '@components/UI/Card';
import Text from '@components/UI/Text';
import { ROUTE_PATH } from '@utils/common';

const CardBotSetting = () => {
  const router = useRouter();
  return (
    <Card>
      <div className='flex items-center gap-4 justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-black w-12 h-12 rounded-full flex justify-center items-center'>
            <Text type='font-16-600' className='text-[#fff]'>
              D
            </Text>
          </div>
          <div className='flex flex-col gap-1'>
            <Text type='font-16-600'>JoomBot</Text>
            <div className='flex items-center gap-[6px]'>
              <Text className='text-accent' type='font-14-400'>
                https://demy.ai/chat/66cc43fe7453d2f35b26c38e
              </Text>
              <ArrowUpRight color='#6d28d9' size={14} />
            </div>
          </div>
        </div>
        {/* <Button radius='md' size='lg' className='bg-black min-h-11'>
          <Image
            src={'/static/icons/ic-settings.svg'}
            className='w-4 h-4'
            width={16}
            height={16}
            alt=''
          />
          <Text className='text-white' type='font-14-600'>
            Bot Setting
          </Text>
        </Button> */}
        <Button
          onClick={() => router.push(ROUTE_PATH.TEMPLATE_BOT)}
          radius='md'
          size='lg'
          className='bg-fill-accent min-h-11'
        >
          <Image
            src={'/static/icons/ic-bot.svg'}
            className='w-4 h-4'
            width={16}
            height={16}
            alt=''
          />
          <Text className='text-white' type='font-14-600'>
            Create a new Bot
          </Text>
        </Button>
      </div>
    </Card>
  );
};
export default CardBotSetting;
