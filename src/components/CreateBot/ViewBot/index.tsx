/* eslint-disable indent */
/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button } from '@nextui-org/react';
import { ArrowRight, PaperPlaneTilt, X } from '@phosphor-icons/react';
import Image from 'next/image';

import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';

const ViewBot = ({ control, errors, watch }: any) => {
  const allValues = watch();

  const getBackgroundStyle = () => {
    if (allValues?.chatbotHeader === 'bgColor' || allValues?.chatbotHeader === 'image') {
      return {
        background: allValues?.headerBackground
          ? allValues?.headerBackground
          : allValues.contentColor,
      };
    }

    if (allValues?.chatbotHeader === 'gradient') {
      return {
        background: `linear-gradient(to right, ${allValues.startColor}, ${allValues.endColor})`,
      };
    }
  };

  const getFontSize = () => {
    if (allValues.contentFontSize === '12px') {
      return {
        fontSize: '12px',
        lineHeight: '16px',
      };
    }
    if (allValues.contentFontSize === '14px') {
      return {
        fontSize: '14px',
        lineHeight: '20px',
      };
    }
    if (allValues.contentFontSize === '16px') {
      return {
        fontSize: '16px',
        lineHeight: '24px',
      };
    }
    if (allValues.contentFontSize === '18px') {
      return {
        fontSize: '18px',
        lineHeight: '24px',
      };
    }
  };

  return (
    <div>
      <div
        style={{
          ...getBackgroundStyle(),
        }}
        className={'rounded-[8px_8px_0_0] p-4 flex items-center justify-between'}
      >
        <div className='flex items-center gap-[10px]'>
          <Image
            src={'/static/icons/ic-chat-bot.svg'}
            alt=''
            width={13}
            height={12}
            className='w-[13px] h-3'
          />
          <Text className='text-white' type='font-14-600'>
            {allValues?.botname || 'Demy Bot'}
          </Text>
        </div>
        <X size={12} color='#fff' />
      </div>
      <div
        style={{
          backgroundImage: `url(${allValues?.contentBackground})`,
        }}
        className={
          'bg-cover bg-center bg-white border-neutral-01 border-1 border-solid rounded-[0_0_8px_8px] p-4 flex-col flex justify-between min-h-[480px]'
        }
      >
        <div className='flex gap-2 flex-auto'>
          <div>
            <Avatar src={allValues?.avatarBot || ''} className='w-9 h-9' />
          </div>
          <div className='flex flex-col gap-1 mr-8'>
            <Text type='font-12-600'> {allValues?.botname || 'Demy Bot'}</Text>
            <div className='flex flex-col gap-2'>
              <div className='bg-neutral-01 py-3 px-4 rounded-[0_12px_12px_12px]'>
                <p
                  style={{
                    ...getFontSize(),
                  }}
                  className={'font-normal'}
                >
                  {allValues?.welcomeMessage ||
                    `Hi there! 👋 I'm here to help you with any questions or issues you might have. How
                  can I assist you?`}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                {allValues?.chatSuggestions?.map((item: any) => {
                  return (
                    <Button
                      key={item?.id}
                      size='md'
                      className='bg-white border border-solid border-neutral-01'
                    >
                      <Text type='font-12-400'>{item?.title}</Text>
                      <ArrowRight color='#95999D' size={16} />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2  text-center'>
          <InputText
            control={control}
            errors={errors}
            name='question'
            botSetting
            size={'lg'}
            placeholder='Type your question'
            endContent={<PaperPlaneTilt size={12} color='#95999D' weight='fill' />}
          />
          <Text type='font-12-400' className='text-neutral'>
            Powered by{' '}
            <span
              style={{
                color: allValues.contentColor,
              }}
            >
              Demy.ai
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};
export default ViewBot;
