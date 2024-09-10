/* eslint-disable multiline-ternary */
import { useState } from 'react';

import { Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react';
import ColorPicker from '@rc-component/color-picker';
import clsx from 'clsx';
import Image from 'next/image';

import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';

import CardSetupBot from '../CardSetupBot';

import '@rc-component/color-picker/assets/index.css';

const DATA_BACKGROUND = [
  {
    id: 1,
    bgImg: '',
  },
  {
    id: 2,
    bgImg: '/images/bg-bot.png',
  },
  {
    id: 3,
    bgImg: '/images/bg-2-bot.png',
  },
  {
    id: 4,
    bgImg: '/images/bg-3-bot.png',
  },
  {
    id: 5,
    bgImg: '/images/bg-4-bot.png',
  },
  {
    id: 6,
    bgImg: '/images/bg-5-bot.png',
  },
  {
    id: 7,
    bgImg: '/images/bg-6-bot.png',
  },
  {
    id: 8,
    bgImg: '/images/bg-7-bot.png',
  },
];

const DATA_CHATBOT_HEADER = [
  {
    id: 1,
    label: 'Use the background color',
    key: 'bgColor',
  },
  {
    id: 2,
    key: 'gradient',
    label: 'Gradient',
  },
  {
    id: 3,
    label: 'Image',
    key: 'image',
  },
];

const Appearance = () => {
  const [valueChatBotHeader, setValueChatBotHeader] = useState<string>('bgColor');
  const [color, setColor] = useState<string>('#8B5CF6');
  const [colorChatBotHeader, setColorChatBotHeader] = useState<string>('#8B5CF6');

  const [activeBgColor, setActiveBgColor] = useState<number>(1);

  const handleColorChange = (value: any) => {
    setColor(value.toHexString());
  };
  const handleColorChangeChatBotHeader = (value: any) => {
    setColorChatBotHeader(value.toHexString());
  };

  const handleClickBgColor = (id: number) => {
    setActiveBgColor(id);
  };

  const onValueChangeRadio = (value: any) => {
    setValueChatBotHeader(value);
  };
  return (
    <>
      <CardSetupBot
        title='Chatbot Content'
        description='Explore and adjust your chatbot’s settings to match your brand.'
      >
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-3 gap-4'>
            <Popover
              classNames={{
                content: ['!p-0 !shadow-none'],
              }}
              placement='bottom-start'
            >
              <PopoverTrigger>
                <div className='flex flex-col gap-2'>
                  <Text type='font-14-600'>Theme Color</Text>
                  <div className='rounded-xl hover:border-disabled focus:border-accent cursor-pointer h-[42px] bg-white p-3 flex items-center gap-2 border-1 border-solid border-neutral-01'>
                    <div className='w-5 h-5 rounded' style={{ background: color }} />
                    <Text type='font-14-400'>{color}</Text>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker value={color} onChange={handleColorChange} />
              </PopoverContent>
            </Popover>
            <CustomSelect
              label='Font Style'
              className='w-full'
              radius='md'
              size='lg'
              placeholder='Default'
              options={[
                {
                  value: 1,
                  label: 'Style 1',
                },
                {
                  value: 2,
                  label: 'Style 2',
                },
                {
                  value: 3,
                  label: 'Style 3',
                },
              ]}
            />
            <CustomSelect
              label='Font Size'
              className='w-full'
              radius='md'
              size='lg'
              placeholder='Default'
              options={[
                {
                  value: 1,
                  label: '12px',
                },
                {
                  value: 2,
                  label: '14px',
                },
                {
                  value: 3,
                  label: '16px',
                },
              ]}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-600'>Background</Text>
            <div className='grid-cols-8 gap-4 grid'>
              {DATA_BACKGROUND?.map((item) => {
                return (
                  <div
                    onClick={() => handleClickBgColor(item.id)}
                    className={clsx(
                      'border-1  cursor-pointer border-solid border-neutral-01 rounded-lg p-2',
                      {
                        '!border-accent !border-2': activeBgColor === item?.id,
                      },
                    )}
                    key={item?.id}
                  >
                    {item?.bgImg ? (
                      <Image
                        src={item?.bgImg}
                        alt=''
                        width={56}
                        height={75}
                        className='w-full h-[75px]'
                      />
                    ) : (
                      <div className='w-full h-[75px] bg-white' />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardSetupBot>

      <CardSetupBot
        title='Chatbot Header'
        description='Explore and adjust your chatbot’s settings to match your brand.'
      >
        {/* <div className='flex flex-col gap-4'>
          {DATA_CHATBOT_HEADER?.map((item) => {
            return (
              <div key={item?.id} className='flex flex-col gap-2'>
                <Radio value={item?.key}>
                  <Text type='font-14-600'>{item?.label}</Text>
                </Radio>
              </div>
            );
          })}
        </div> */}
        <RadioGroup
          onValueChange={onValueChangeRadio}
          label=''
          color='secondary'
          value={valueChatBotHeader}
          defaultValue='bgColor'
        >
          {DATA_CHATBOT_HEADER?.map((item) => {
            return (
              <div key={item?.id} className='flex flex-col gap-2 mb-2'>
                <Radio value={item?.key}>
                  <Text type='font-14-600'>{item?.label}</Text>
                </Radio>
                {valueChatBotHeader === 'bgColor' && item?.key === valueChatBotHeader && (
                  <Popover
                    classNames={{
                      content: ['!p-0 !shadow-none'],
                    }}
                    placement='bottom-start'
                  >
                    <PopoverTrigger>
                      <div className='rounded-xl max-w-[192px] hover:border-disabled focus:border-accent cursor-pointer h-[42px] bg-white p-3 flex items-center gap-2 border-1 border-solid border-neutral-01'>
                        <div
                          className='w-5 h-5 rounded'
                          style={{ background: colorChatBotHeader }}
                        />
                        <Text type='font-14-400'>{colorChatBotHeader}</Text>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <ColorPicker
                        value={colorChatBotHeader}
                        onChange={handleColorChangeChatBotHeader}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            );
          })}
        </RadioGroup>
      </CardSetupBot>
    </>
  );
};
export default Appearance;
