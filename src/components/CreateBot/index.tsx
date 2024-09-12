/* eslint-disable multiline-ternary */
import { useRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { ArrowLeft, ArrowRight, CaretLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import StepProgress from '@components/UI/StepProgress';
import Text from '@components/UI/Text';
import { STEP_SETUP_BOT } from '@utils/common';

import Appearance from './Appearance';
import CardLinkChatBot from './CardLinkChatBot';
import General from './General';
import ImportData from './ImportData';
import Installation from './Installation';
import ModalDiscardChanges from './ModalDiscardChanges';
import ViewBot from './ViewBot';

const steps = [
  {
    label: 'General',
    value: STEP_SETUP_BOT.GENERAL,
  },
  {
    label: 'Import Data',
    value: STEP_SETUP_BOT.IMPORT_DATA,
  },
  {
    label: 'Appearance',
    value: STEP_SETUP_BOT.APPEARANCE,
  },
  {
    label: 'Installation',
    value: STEP_SETUP_BOT.INSTALLATION,
  },
];

const CreateBot = () => {
  const router = useRouter();
  const refModalDiscardChanges: any = useRef();

  const [currentStep, setCurrentStep] = useState<string>(STEP_SETUP_BOT.GENERAL);

  const {
    formState: { errors },
    control,
    watch,
    setValue,
    register,
    handleSubmit,
  } = useForm<any>({
    defaultValues: {
      chatSuggestions: [{ title: 'I’m having trouble with my account.' }],
      files: [],
    },
  });

  const handleNextStep = () => {
    const currentIndex = steps.findIndex((item: any) => item.value === currentStep);
    const nextStep = steps?.[currentIndex + 1]?.value;
    setCurrentStep(nextStep);
  };
  const handlePrevStep = () => {
    const currentIndex = steps.findIndex((item: any) => item.value === currentStep);
    const nextStep = steps?.[currentIndex - 1]?.value;
    setCurrentStep(nextStep);
  };

  const onSubmit = (values: any) => {
    console.log(values, 'values');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-1'>
            <Button
              variant='light'
              size='sm'
              isIconOnly
              onClick={() => router.back()}
              className='rounded-full'
            >
              <CaretLeft size={12} />
            </Button>
            <Text className='text-neutral' type='font-12-500'>
              Dashboard
            </Text>
          </div>
          <Text type='font-24-600'>Setup Your Bot</Text>
        </div>
        <div className='grid grid-cols-6 gap-8'>
          <div className='col-span-4 flex flex-col gap-4'>
            <StepProgress steps={steps} currentStep={currentStep} />
            {currentStep === STEP_SETUP_BOT.GENERAL && (
              <General
                watch={watch}
                register={register}
                setValue={setValue}
                control={control}
                errors={errors}
              />
            )}
            {currentStep === STEP_SETUP_BOT.IMPORT_DATA && (
              <ImportData
                register={register}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
              />
            )}
            {currentStep === STEP_SETUP_BOT.APPEARANCE && <Appearance control={control} />}
            {currentStep === STEP_SETUP_BOT.INSTALLATION && (
              <Installation control={control} errors={errors} />
            )}

            <div className='flex items-center justify-between'>
              <Button
                onClick={() => refModalDiscardChanges.current.onOpen()}
                radius='md'
                size='lg'
                isDisabled={currentStep === STEP_SETUP_BOT.GENERAL}
                className='bg-destructive'
              >
                <Text type='font-14-600' className='text-danger'>
                  Discard
                </Text>
              </Button>
              <div className='flex items-center gap-2'>
                {currentStep !== STEP_SETUP_BOT.GENERAL && (
                  <Button onClick={handlePrevStep} radius='md' size='lg' className='bg-neutral-01'>
                    <ArrowLeft color='#1e1f20' size={16} />
                    <Text type='font-14-600'>Back</Text>
                  </Button>
                )}

                {currentStep === STEP_SETUP_BOT.INSTALLATION ? (
                  <Button type='submit' radius='md' size='lg' className='bg-fill-accent'>
                    <Text type='font-14-600' className='text-white'>
                      Publish Chatbot
                    </Text>
                  </Button>
                ) : (
                  <Button onClick={handleNextStep} radius='md' size='lg' className='bg-black'>
                    <Text type='font-14-600' className='text-white'>
                      Next
                    </Text>
                    <ArrowRight color='#fff' size={16} />
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className='col-span-2 flex flex-col gap-4'>
            <ViewBot watch={watch} control={control} errors={errors} />
            <CardLinkChatBot />
          </div>
        </div>

        <ModalDiscardChanges ref={refModalDiscardChanges} />
      </div>
    </form>
  );
};
export default CreateBot;
