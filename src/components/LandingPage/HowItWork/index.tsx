import { useState } from 'react';

import { Tab, Tabs } from '@nextui-org/react';
import { Code, Gear, TrendUp } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';

import Text from '@components/UI/Text';
import { TAB_HOWITWORK } from '@utils/common';

import { ItemContent } from '../WhyDemy';
import { IconAvailability, IconEffortless, IconInsights } from '../WhyDemy/Icons';

const TAB_WORKS = [
  {
    id: TAB_HOWITWORK?.CUSTOMIZABLE,
    label: 'Customizable',
  },
  {
    id: TAB_HOWITWORK?.INPUT_DATA,
    label: 'Input Data',
  },
  {
    id: TAB_HOWITWORK?.INTEGRATE,
    label: 'Integrate',
  },
];

const HowItWork = () => {
  const [tab, setTab] = useState(TAB_HOWITWORK?.CUSTOMIZABLE);
  const onChangeTab = (tab: any) => {
    setTab(tab);
  };
  const renderIcon = (key: TAB_HOWITWORK, selectedTab: boolean) => {
    if (key === TAB_HOWITWORK.CUSTOMIZABLE) {
      return <Gear size={32} color={selectedTab ? '#6366F1' : '#000000'} />;
    }
    if (key === TAB_HOWITWORK.INPUT_DATA) {
      return <TrendUp size={32} color={selectedTab ? '#6366F1' : '#000000'} />;
    }
    if (key === TAB_HOWITWORK.INTEGRATE) {
      return <Code size={32} color={selectedTab ? '#6366F1' : '#000000'} />;
    }
  };
  return (
    <div className='bg-[url("/images/bg-how-it-work.png")] h-max bg-no-repeat bg-cover'>
      <div className='container m-auto py-[128px]'>
        <div className='flex flex-col gap-[68px] '>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4 text-center justify-center items-center'>
              <div className='border-1 w-max h-[36px] border-solid border-indigo-500 rounded-lg py-2 px-3'>
                <Text type='font-14-400' className='uppercase text-indigo-500'>
                  How It Work
                </Text>
              </div>
              <Text type='font-48-600'>
                Get Your Chatbot Ready in Just 5<br /> Minutes with 3 Simple Steps
              </Text>
              <Text type='font-18-400' className='text-secodary'>
                Follow these straightforward steps to unleash the full potential of your custom
                chatbot and enhance user experiences.
              </Text>
            </div>
            <div className='flex flex-col justify-center items-center gap-[64px]'>
              <Tabs
                classNames={{
                  tab: ['h-[100px] !border-0 w-[164px] shadow-none'],
                  cursor: '!border-0 bg-indigo-shade !text-indigo-500',
                }}
                variant={'light'}
                size='lg'
                selectedKey={tab}
                onSelectionChange={onChangeTab}
              >
                {TAB_WORKS?.map((item) => {
                  return (
                    <Tab
                      key={item?.id}
                      title={
                        <div className='flex flex-col gap-1 items-center'>
                          <>{renderIcon(item?.id, item?.id === tab)}</>
                          <Text
                            className={clsx('text-black', {
                              '!text-indigo-500': item?.id === tab,
                            })}
                            type='font-16-600'
                          >
                            {item?.label}
                          </Text>
                        </div>
                      }
                    />
                  );
                })}
              </Tabs>
              <div className='bg-indigo-50 z-50 rounded-3xl p-16 relative grid grid-cols-2'>
                <Image
                  src={'/images/img-grid.png'}
                  width={404}
                  height={511}
                  alt=''
                  className='w-[404px] z-[-1] h-full absolute right-[159px] top-0 bottom-0'
                />
                <div className='flex flex-col gap-8'>
                  <div className='bg-indigo-500 rounded-2xl w-[64px] h-[64px] flex justify-center items-center'>
                    <Gear size={32} color={'#FFFFFF'} />
                  </div>
                  <div className='flex flex-col gap-6'>
                    <Text className='text-[36px] font-semibold leading-10'>
                      Customize Your Chatbot
                    </Text>
                    <Text type='font-18-400' className='text-secodary'>
                      Create your chatbot, tailor the interface, and design engaging welcome
                      messages to ensure your chatbot truly reflects your brand’s unique style and
                      personality.
                    </Text>
                    <ItemContent
                      icon={<IconEffortless />}
                      text='Effortless customization, no coding required'
                    />
                    <ItemContent icon={<IconAvailability />} text='24/7 support availability' />

                    <ItemContent icon={<IconInsights />} text='Data-driven insights' />
                  </div>
                </div>
                <div className='bg-white p-2 rounded-xl shadow-lg'>
                  <Image
                    src={'/images/bg-settings-bot.png'}
                    alt=''
                    width={592}
                    height={394}
                    className='w-full h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWork;
