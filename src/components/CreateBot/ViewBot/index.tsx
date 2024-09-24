/* eslint-disable indent */
/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable react/no-unescaped-entities */
import { useMemo } from 'react';

import { Avatar, Button } from '@nextui-org/react';
import { ArrowRight, ChatCircleDots, X } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import BubbleChat from '@components/UI/BubbleChat';
import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { THEME_BOT } from '@utils/common';

import {
  getBackgroundChatStyle,
  getBackgroundContentMessageStyle,
  getBackgroundHeaderStyle,
  getBackgroundUserChatStyle,
  getColorBotNameStyle,
  getColorButtonSuggestion,
  getColorFooterBotStyle,
  getColorIconChat,
  getColorTextThinking,
  getTextHeaderBotStyle,
} from '../constant';

const ViewBot = ({ control, errors, watch }: any) => {
  const allValues = watch();
  const router = useRouter();

  const themeBot: any = useMemo(() => {
    return router.query.theme;
  }, [router]);

  return (
    <div className='flex flex-col gap-4 items-end'>
      <div>
        <div
          style={{
            ...getBackgroundHeaderStyle(themeBot),
          }}
          className={'rounded-[12px_12px_0_0] p-4 flex items-center justify-between'}
        >
          <div className='flex items-center gap-[10px]'>
            <ChatCircleDots weight='bold' size={16} color={getColorIconChat(themeBot)} />
            <Text
              style={{
                ...getTextHeaderBotStyle(themeBot),
              }}
              type='font-14-600'
            >
              {allValues?.botname || 'Demy Bot'}
            </Text>
          </div>
          <X size={14} color={'#FFFFFF86'} />
        </div>
        <div
          style={{
            ...getBackgroundChatStyle(themeBot),
          }}
          className={'bg-cover bg-center p-4 flex-col flex justify-between min-h-[480px]'}
        >
          <div className='flex flex-col gap-6'>
            <div className='flex gap-2 flex-auto w-10/12'>
              <div>
                <Avatar src={allValues?.avatar?.url || '/images/img-bot.png'} className='w-9 h-9' />
              </div>
              <div className='flex flex-col gap-1 mr-8'>
                <Text
                  style={{
                    ...getColorBotNameStyle(themeBot),
                  }}
                  type='font-12-600'
                >
                  {' '}
                  {allValues?.botname || 'Demy Bot'}
                </Text>
                <div className='flex flex-col gap-2'>
                  <div
                    style={{
                      ...getBackgroundContentMessageStyle(themeBot),
                    }}
                    className='py-3 px-4 rounded-[0_12px_12px_12px]'
                  >
                    <Text
                      style={{
                        ...getColorButtonSuggestion(themeBot),
                      }}
                      type='font-14-400'
                      className={'font-normal'}
                    >
                      {allValues?.welcomeMessage ||
                        `Hi there! 👋 I'm here to help you with any questions or issues you might have. How
                  can I assist you?`}
                    </Text>
                  </div>
                  <div className='flex flex-col gap-2'>
                    {allValues?.chatSuggestions?.map((item: any) => {
                      const colorSuggestion = getColorButtonSuggestion(themeBot);
                      return (
                        <Button
                          key={item?.id}
                          size='md'
                          className={clsx('bg-transparent border border-solid border-[#0000001A]', {
                            'border-[#FFFFFF1A]': themeBot === THEME_BOT.HALLOWEEN,
                          })}
                        >
                          <Text
                            style={{
                              ...getColorButtonSuggestion(themeBot),
                            }}
                            type='font-12-400'
                          >
                            {item?.title}
                          </Text>
                          <ArrowRight color={colorSuggestion?.color} size={16} />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-end justify-end'>
              <div
                style={{
                  ...getBackgroundUserChatStyle(themeBot),
                }}
                className='rounded-[12px_0_12px_12px]  py-3 px-4'
              >
                <Text type='font-14-400' className='text-white'>
                  I’m having trouble with my account.
                </Text>
              </div>
            </div>
            <div className='flex gap-2 flex-auto w-10/12'>
              <div>
                <Avatar src={allValues?.avatar?.url || '/images/img-bot.png'} className='w-9 h-9' />
              </div>
              <div className='flex flex-col gap-1 mr-8'>
                <Text
                  style={{
                    ...getColorBotNameStyle(themeBot),
                  }}
                  type='font-12-600'
                >
                  {' '}
                  {allValues?.botname || 'Demy Bot'}
                </Text>
                <div className='flex flex-col gap-2'>
                  <div
                    style={{
                      ...getBackgroundContentMessageStyle(themeBot),
                    }}
                    className='py-3 px-4 rounded-[0_12px_12px_12px]'
                  >
                    <Text
                      style={{
                        ...getColorTextThinking(themeBot),
                      }}
                      type='font-14-400'
                      className={'font-normal'}
                    >
                      Thinking...
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col border rounded-[0px_0px_12px_12px] border-t-0  border-solid border-neutral-01 bg-white text-center'>
          <div className='border-b-1 py-1 border-solid border-neutral-01'>
            <InputText
              control={control}
              errors={errors}
              name='question'
              botSetting
              size={'lg'}
              endContent={<IconEmoji />}
              placeholder='Type your question'
            />
          </div>
          <div className='p-2'>
            <Text type='font-12-400' className='text-neutral'>
              Powered by{' '}
              <span
                style={{
                  ...getColorFooterBotStyle(themeBot),
                }}
              >
                Demy.ai
              </span>
            </Text>
          </div>
        </div>
      </div>
      <BubbleChat theme={themeBot} />
    </div>
  );
};
export default ViewBot;

const IconEmoji = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
      <path
        d='M9.00033 0.666016C13.6028 0.666016 17.3337 4.39685 17.3337 8.99935C17.3337 13.6018 13.6028 17.3327 9.00033 17.3327C4.39783 17.3327 0.666992 13.6018 0.666992 8.99935C0.666992 4.39685 4.39783 0.666016 9.00033 0.666016ZM9.00033 2.33268C7.23222 2.33268 5.53652 3.03506 4.28628 4.2853C3.03604 5.53555 2.33366 7.23124 2.33366 8.99935C2.33366 10.7675 3.03604 12.4632 4.28628 13.7134C5.53652 14.9636 7.23222 15.666 9.00033 15.666C10.7684 15.666 12.4641 14.9636 13.7144 13.7134C14.9646 12.4632 15.667 10.7675 15.667 8.99935C15.667 7.23124 14.9646 5.53555 13.7144 4.2853C12.4641 3.03506 10.7684 2.33268 9.00033 2.33268ZM11.3337 10.5468C11.4114 10.4684 11.504 10.4062 11.606 10.3639C11.708 10.3215 11.8174 10.2999 11.9278 10.3002C12.0382 10.3005 12.1475 10.3227 12.2493 10.3657C12.351 10.4086 12.4432 10.4713 12.5206 10.5501C12.5979 10.629 12.6587 10.7224 12.6996 10.825C12.7405 10.9276 12.7606 11.0373 12.7587 11.1477C12.7568 11.2581 12.733 11.3671 12.6887 11.4682C12.6443 11.5694 12.5803 11.6607 12.5003 11.7368C11.5665 12.6542 10.3094 13.1675 9.00033 13.166C7.6913 13.1675 6.43419 12.6542 5.50033 11.7368C5.34618 11.5813 5.25943 11.3714 5.25883 11.1525C5.25822 10.9335 5.34382 10.7231 5.4971 10.5668C5.65038 10.4104 5.85904 10.3207 6.07796 10.317C6.29688 10.3132 6.50847 10.3958 6.66699 10.5468C7.28934 11.1587 8.12759 11.5009 9.00033 11.4993C9.90866 11.4993 10.7312 11.1368 11.3337 10.5468ZM6.08366 5.66602C6.41518 5.66602 6.73312 5.79771 6.96754 6.03213C7.20196 6.26655 7.33366 6.5845 7.33366 6.91602C7.33366 7.24754 7.20196 7.56548 6.96754 7.7999C6.73312 8.03432 6.41518 8.16602 6.08366 8.16602C5.75214 8.16602 5.4342 8.03432 5.19978 7.7999C4.96535 7.56548 4.83366 7.24754 4.83366 6.91602C4.83366 6.5845 4.96535 6.26655 5.19978 6.03213C5.4342 5.79771 5.75214 5.66602 6.08366 5.66602ZM11.917 5.66602C12.2485 5.66602 12.5665 5.79771 12.8009 6.03213C13.0353 6.26655 13.167 6.5845 13.167 6.91602C13.167 7.24754 13.0353 7.56548 12.8009 7.7999C12.5665 8.03432 12.2485 8.16602 11.917 8.16602C11.5855 8.16602 11.2675 8.03432 11.0331 7.7999C10.7987 7.56548 10.667 7.24754 10.667 6.91602C10.667 6.5845 10.7987 6.26655 11.0331 6.03213C11.2675 5.79771 11.5855 5.66602 11.917 5.66602Z'
        fill='#464546'
        fillOpacity='0.4'
      />
    </svg>
  );
};
