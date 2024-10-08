/* eslint-disable import/no-cycle */
import { useState } from 'react';

import { Tab, Tabs } from '@nextui-org/react';
import { Code, Gear, Globe, TrendUp } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import Text from '@components/UI/Text';
import { TAB_HOWITWORK } from '@utils/common';

import { AnimatedItem } from '..';

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

const dataStep1 = [
  {
    id: 1,
    text: 'Welcome Message: Create a personalized message to make a friendly first impression.',
  },
  {
    id: 2,
    text: 'Bot Name: A memorable name makes the bot more relatable to users.',
  },
  {
    id: 3,
    text: 'Color Scheme: Selecting colors that blend well with your website’s theme.',
  },
  {
    id: 4,
    text: 'Frequently Asked Questions (FAQs): They help the Chatbot handle routine inquiries automatically, saving time.',
  },
];

const dataStep2 = [
  {
    id: 1,
    text: 'Website URLs: Add URLs from your site so the chatbot can extract information directly from your content, enabling it to answer queries based on real-time website data.',
  },
  {
    id: 2,
    text: 'Upload Files: Supplement the chatbot’s knowledge by uploading important files (such as PDFs, documents, or reports).',
  },
];
const dataStep3 = [
  {
    id: 1,
    text: 'Integration Process: Follow the detailed coding instructions provided by the platform to ensure the chatbot functions seamlessly.',
  },
  {
    id: 2,
    text: 'Placement and Functionality: You can decide where the chatbot will appear on your site to help the chatbot be fully operational and ready to assist users in real time.',
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

  const renderTitleCard = () => {
    let text: string = '';
    if (tab === TAB_HOWITWORK.CUSTOMIZABLE) {
      text = 'Step 1: Configure General Information';
    }
    if (tab === TAB_HOWITWORK.INPUT_DATA) {
      text = 'Step 2: Upload Data for Chatbot Training';
    }
    if (tab === TAB_HOWITWORK.INTEGRATE) {
      text = 'Step 3: Integrate the Chatbot into Your Website';
    }
    return text;
  };
  const renderDescriptionCard = () => {
    let text: string = '';
    if (tab === TAB_HOWITWORK.CUSTOMIZABLE) {
      text = 'Start by setting up the core details of your chatbot to match your brand and goals:';
    }
    if (tab === TAB_HOWITWORK.INPUT_DATA) {
      text =
        'To improve the chatbot’s accuracy and ability to answer specific questions, you’ll need to provide relevant data:';
    }
    if (tab === TAB_HOWITWORK.INTEGRATE) {
      text = 'Once your chatbot is configured and trained, it’s time to implement it on your site:';
    }
    return text;
  };

  const renderImageHowItWork = () => {
    let url: string = '';
    if (tab === TAB_HOWITWORK.CUSTOMIZABLE) {
      url = '/images/bg-it-work1.png';
    }
    if (tab === TAB_HOWITWORK.INPUT_DATA) {
      url = '/images/bg-it-work2.png';
    }
    if (tab === TAB_HOWITWORK.INTEGRATE) {
      url = '/images/bg-it-work3.png';
    }
    return url;
  };

  const renderIconHeader = () => {
    if (tab === TAB_HOWITWORK.CUSTOMIZABLE) {
      return <Gear size={32} color={'#FFFFFF'} />;
    }
    if (tab === TAB_HOWITWORK.INPUT_DATA) {
      return <Code size={32} color={'#FFFFFF'} />;
    }
    if (tab === TAB_HOWITWORK.INTEGRATE) {
      return <Globe size={32} color={'#FFFFFF'} />;
    }
  };
  return (
    <div
      id='#it-work'
      className='md:bg-[url("/images/bg-how-it-work.png")] h-max bg-no-repeat bg-cover'
    >
      <div className='container px-4 md:px-0 m-auto py-[48px] md:py-[128px]'>
        <div className='flex flex-col gap-[68px] '>
          <div className='flex flex-col  gap-4 md:gap-8'>
            <div className='flex flex-col gap-4 text-center justify-center items-center'>
              <AnimatedItem
                transition={{
                  duration: 0.3,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <div className='border-1 w-max h-[36px] border-solid border-indigo-500 rounded-lg py-2 px-3'>
                  <Text type='font-14-400' className='uppercase text-indigo-500'>
                    How It Work
                  </Text>
                </div>
              </AnimatedItem>

              <AnimatedItem
                transition={{
                  duration: 0.4,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-48-600'>
                  Get Your Chatbot Ready in Just 5<br /> Minutes with 3 Simple Steps
                </Text>
              </AnimatedItem>
              <AnimatedItem
                transition={{
                  duration: 0.5,
                  ease: 'linear',
                  delay: 0.4,
                }}
              >
                <Text type='font-18-400' className='text-secodary'>
                  Follow these straightforward steps to unleash the full potential of your custom
                  chatbot and enhance user experiences.
                </Text>
              </AnimatedItem>
            </div>
            <AnimatedItem
              transition={{
                duration: 0.3,
                ease: 'linear',
                delay: 0.6,
              }}
            >
              <div className='flex flex-col justify-center items-center gap-8 md:gap-[64px]'>
                <Tabs
                  classNames={{
                    tab: isMobile
                      ? ['h-[88px] !border-0 w-[114px] shadow-none']
                      : ['h-[100px] !border-0 w-[164px] shadow-none'],
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
                <div
                  className={clsx(
                    'z-50 rounded-3xl p-4 md:p-16 relative gap-8 grid grid-cols-1 md:grid-cols-2',
                    {
                      '!bg-[#6D28D90D]': tab === TAB_HOWITWORK.CUSTOMIZABLE,
                      '!bg-[#FF3D3A08]': tab === TAB_HOWITWORK.INPUT_DATA,
                      '!bg-[#FFAA0008]': tab === TAB_HOWITWORK.INTEGRATE,
                    },
                  )}
                >
                  {!isMobile && (
                    <Image
                      src={'/images/img-grid.png'}
                      width={404}
                      height={511}
                      alt=''
                      className='w-[404px] z-[-1] h-full absolute right-[159px] top-0 bottom-0'
                    />
                  )}

                  <div className='flex flex-col gap-8'>
                    {!isMobile && (
                      <div
                        className={clsx(
                          'rounded-2xl w-[64px] h-[64px] flex justify-center items-center',
                          {
                            '!bg-indigo-500 ': tab === TAB_HOWITWORK.CUSTOMIZABLE,
                            '!bg-[#FF3D3A]': tab === TAB_HOWITWORK.INPUT_DATA,
                            '!bg-[#FA0]': tab === TAB_HOWITWORK.INTEGRATE,
                          },
                        )}
                      >
                        {renderIconHeader()}
                      </div>
                    )}

                    <div className='flex flex-col gap-2 md:gap-6'>
                      <Text className='text-[22px] md:text-[36px] font-semibold leading-10'>
                        {renderTitleCard()}
                      </Text>
                      <Text type='font-18-400' className='text-secodary'>
                        {renderDescriptionCard()}
                      </Text>
                      {tab === TAB_HOWITWORK.CUSTOMIZABLE && (
                        <ItemContent
                          // icon={<IconEffortless />}
                          dataContent={dataStep1}
                          // text='Effortless customization, no coding required'
                        />
                      )}
                      {tab === TAB_HOWITWORK.INPUT_DATA && (
                        <ItemContent
                          // icon={<IconEffortless />}
                          dataContent={dataStep2}
                          // text='Effortless customization, no coding required'
                        />
                      )}
                      {tab === TAB_HOWITWORK.INTEGRATE && (
                        <ItemContent
                          // icon={<IconEffortless />}
                          dataContent={dataStep3}
                          // text='Effortless customization, no coding required'
                        />
                      )}
                      {/* <ItemContent icon={<IconAvailability />} text='24/7 support availability' />

                      <ItemContent icon={<IconInsights />} text='Data-driven insights' /> */}
                    </div>
                  </div>

                  <Image
                    src={renderImageHowItWork()}
                    alt=''
                    width={592}
                    height={394}
                    className={clsx('w-full h-full', {
                      'mt-[-20px]': tab === TAB_HOWITWORK.CUSTOMIZABLE,
                      'shadow-lg': tab === TAB_HOWITWORK.INPUT_DATA,
                    })}
                  />
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWork;

const ItemContent = ({ dataContent }: { dataContent: any }) => {
  return (
    <div className='flex flex-col gap-2'>
      {dataContent?.map((item: any) => {
        return (
          <div key={item?.item} className='flex items-center gap-3'>
            <div className='w-2 h-[2px]  rounded-full bg-neutral' />
            <Text type='font-14-400' className='text-neutral'>
              {item.text}
            </Text>
          </div>
        );
      })}
    </div>
    // <div className='flex items-center gap-2'>
    //   {icon}
    //   <Text type='font-18-400' className='text-secodary'>
    //     {text}
    //   </Text>
    // </div>
  );
};
