/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button } from '@nextui-org/react';
import { ArrowRight, PaperPlaneTilt, X } from '@phosphor-icons/react';
import Image from 'next/image';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const ViewBot = ({ control, errors }: any) => {
  return (
    <div>
      <div className='bg-fill-accent rounded-[8px_8px_0_0] p-4 flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <Image
            src={'/static/icons/ic-chat-bot.svg'}
            alt=''
            width={13}
            height={12}
            className='w-[13px] h-3'
          />
          <Text className='text-white' type='font-14-600'>
            Demy Bot
          </Text>
        </div>
        <X size={12} color='#fff' />
      </div>
      <div className='bg-white border-neutral-01 border-1 border-solid rounded-[0_0_8px_8px] p-4 flex-col flex justify-between min-h-[480px]'>
        <div className='flex gap-2 flex-auto'>
          <div>
            <Avatar className='w-9 h-9' />
          </div>
          <div className='flex flex-col gap-1 mr-8'>
            <Text type='font-12-600'>Demy Bot</Text>
            <div className='flex flex-col gap-2'>
              <div className='bg-neutral-01 py-3 px-4 rounded-[0_12px_12px_12px]'>
                <Text type='font-14-400'>
                  Hi there! 👋 I'm here to help you with any questions or issues you might have. How
                  can I assist you?
                </Text>
              </div>
              <Button size='md' className='bg-white border border-solid border-neutral-01'>
                <Text type='font-12-400'>I’m having trouble with my account.</Text>
                <ArrowRight color='#95999D' size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2  text-center'>
          <InputText
            control={control}
            errors={errors}
            name='question'
            size={'lg'}
            placeholder='Type your question'
            endContent={<PaperPlaneTilt />}
          />
          <Text type='font-12-400' className='text-neutral'>
            Powered by{' '}
            <Text element='span' className='text-accent'>
              Demy.ai
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
};
export default ViewBot;
