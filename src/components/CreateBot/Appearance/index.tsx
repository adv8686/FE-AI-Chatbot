/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable multiline-ternary */
import { useRef, useState } from 'react';

import { Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react';
import { CaretDown } from '@phosphor-icons/react';
import { useClickAway } from 'ahooks';
import clsx from 'clsx';
import Image from 'next/image';

import ColorPickerCustom from '@components/UI/ColorPickerCustom';
import CustomSelect from '@components/UI/CustomSelect';
import Text from '@components/UI/Text';
import { HeaderBackgroundType } from '@utils/common';

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
    key: HeaderBackgroundType.COLOR,
  },
  {
    id: 2,
    key: HeaderBackgroundType.GRADIENT,
    label: 'Gradient',
  },
  {
    id: 3,
    label: 'Image',
    key: HeaderBackgroundType.IMAGE,
  },
];

const DataFontStyle = [
  {
    id: 1,
    value: 'Switzer, sans-serif',
    imgFont: '/images/img-text-times.png',
  },
  {
    id: 2,
    value: 'Times',
    imgFont: '/images/img-text-times.png',
  },
  {
    id: 3,
    value: 'Comic Sans MS',
    imgFont: '/images/img-text-comic-sans.png',
  },
];

const Appearance = ({ watch, control, register, setValue }: any) => {
  const refFontStyle = useRef<any>(null);
  const [activeBgColor, setActiveBgColor] = useState<number>(1);
  const watchChatbotHeader = watch('chatbotHeader');
  const watchContentFontStyle = watch('contentFontStyle');

  const [openFontStyle, setOpenFontStyle] = useState(false);

  const handleClickBgColor = (id: number, bgImg: string) => {
    setActiveBgColor(id);
    console.log(bgImg, 'bgImg');
    // setValue('contentBackground');
  };

  const onValueChangeRadio = (value: any) => {
    setValue('chatbotHeader', value);
  };
  const handleClickFontStyle = (item: any) => {
    setOpenFontStyle(false);
    setValue('contentFontStyle', item.value);
  };

  useClickAway(() => {
    setOpenFontStyle(false);
  }, refFontStyle);

  return (
    <>
      <CardSetupBot
        title='Chatbot Content'
        description='Explore and adjust your chatbot’s settings to match your brand.'
      >
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-3 gap-4'>
            <ColorPickerCustom
              label='Theme Color'
              control={control}
              register={register}
              name='contentColor'
            />
            <Popover
              classNames={{
                content: ['!p-0 !shadow-none'],
              }}
              isOpen={openFontStyle}
              placement='bottom-start'
            >
              <PopoverTrigger>
                <div
                  ref={refFontStyle}
                  className='flex flex-col gap-2'
                  onClick={() => setOpenFontStyle(true)}
                >
                  <Text type='font-14-600'>Font Style</Text>
                  <div className='h-[42px] p-3 border-1 border-solid border-neutral-02 rounded-xl flex justify-between items-center gap-2'>
                    <Text type='font-14-400'>{watchContentFontStyle}</Text>
                    <CaretDown size={14} weight='light' />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className='border-1 cursor-pointer border-solid rounded-lg border-neutral-02 p-4 flex items-center gap-4 shadow-xl'>
                  {DataFontStyle?.map((item) => {
                    return (
                      <div
                        {...register('contentFontStyle')}
                        key={item?.id}
                        onClick={() => handleClickFontStyle(item)}
                        className={clsx(
                          'w-[92px] transition-all hover:border-disabled h-[92px] border-1 border-solid border-neutral-01 flex justify-center items-center rounded-lg',
                          {
                            '!border-accent !border-2': watchContentFontStyle === item?.value,
                          },
                        )}
                      >
                        <Image
                          src={item.imgFont}
                          width={46}
                          height={36}
                          alt=''
                          className='w-[46px] h-[36px]'
                        />
                      </div>
                    );
                  })}
                </div>
              </PopoverContent>
            </Popover>

            <CustomSelect
              label='Font Size'
              control={control}
              name='contentFontSize'
              className='w-full'
              radius='md'
              size='lg'
              placeholder='Default'
              options={[
                {
                  value: '12px',
                  label: 'Small (12px)',
                },
                {
                  value: '14px',
                  label: 'Default (14px)',
                },
                {
                  value: '16px',
                  label: 'Large (16px)',
                },
                {
                  value: '18px',
                  label: 'Extra Large (18px)',
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
                    {...register('contentBackground')}
                    onClick={() => handleClickBgColor(item.id, item?.bgImg)}
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
        <RadioGroup
          onValueChange={onValueChangeRadio}
          color='secondary'
          value={watchChatbotHeader}
          defaultValue={HeaderBackgroundType.COLOR}
        >
          {DATA_CHATBOT_HEADER?.map((item) => {
            return (
              <div key={item?.id} className='flex flex-col gap-2 mb-2'>
                <Radio value={item?.key}>
                  <Text type='font-14-600'>{item?.label}</Text>
                </Radio>
                {watchChatbotHeader === HeaderBackgroundType.COLOR &&
                  item?.key === watchChatbotHeader && (
                    <ColorPickerCustom
                      control={control}
                      register={register}
                      containerColorClassName='max-w-[168px]'
                      name='headerBackground'
                    />
                  )}
                {watchChatbotHeader === HeaderBackgroundType.GRADIENT &&
                  item?.key === watchChatbotHeader && (
                    <div className='flex items-center gap-2'>
                      <ColorPickerCustom
                        control={control}
                        labelInsite
                        label='Start color'
                        register={register}
                        containerColorClassName='w-max'
                        name='startColor'
                      />
                      <ColorPickerCustom
                        control={control}
                        labelInsite
                        register={register}
                        label='End color'
                        containerColorClassName='w-max'
                        name='endColor'
                      />
                    </div>
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
