/* eslint-disable multiline-ternary */
import React from 'react';

import { Check } from '@phosphor-icons/react';
import clsx from 'clsx';

import Text from '../Text';

interface ISteps {
  value: string;
  label: string;
}

const StepProgress = ({ steps, currentStep }: { steps: ISteps[]; currentStep: string }) => {
  return (
    <div className='flex items-center justify-between p-4 border-1 border-solid border-neutral-01 rounded-lg'>
      {steps?.map((step, index) => {
        const currentIndex = steps.findIndex((item: any) => item.value === currentStep);
        return (
          <div
            key={step.value}
            className={clsx('relative justify-center flex items-center gap-2 flex-1 text-center')}
          >
            <div
              className={clsx(
                'flex items-center justify-center w-6 h-6 rounded-full  bg-neutral-03',

                {
                  '!bg-fill-accent': currentStep === step.value,
                  '!bg-accent-soft': currentIndex > index,
                },
              )}
            >
              {currentIndex > index ? (
                <Check size={10} color='#8B5CF6' weight='light' />
              ) : (
                <Text
                  className={clsx('text-neutral', {
                    'text-white': currentStep === step.value,
                  })}
                  type='font-12-500'
                >
                  {index + 1}
                </Text>
              )}
            </div>
            <Text type='font-14-600' className='text-secodary'>
              {step.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
