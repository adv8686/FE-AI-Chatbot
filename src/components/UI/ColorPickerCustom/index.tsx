/* eslint-disable multiline-ternary */
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import ColorPicker from '@rc-component/color-picker';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import Text from '../Text';

const ColorPickerCustom = ({
  register,
  name,
  control,
  label,
  containerColorClassName = '',
  labelInsite,
}: {
  control: Control;
  register: any;
  name: string;
  label?: string;
  containerColorClassName?: string;
  labelInsite?: boolean;
}) => {
  const { field } = useController({
    name,
    control,
  });
  const handleChageValueColor = (value: any) => {
    field?.onChange(value.toHexString());
  };
  return (
    <Popover
      classNames={{
        content: ['!p-0 !shadow-none'],
      }}
      placement='bottom-start'
    >
      <PopoverTrigger>
        {labelInsite ? (
          <div
            className={clsx(
              'rounded-xl cursor-pointer h-[42px] bg-white  flex items-center border-1 border-solid border-neutral-01',
              {
                [containerColorClassName]: !!containerColorClassName,
              },
            )}
          >
            <div className='border-r-1 border-solid border-r-neutral-01 p-3'>
              <Text type='font-14-400' className='text-neutral'>
                {label || '#8B5CF6'}
              </Text>
            </div>

            <div className='flex items-center gap-2 p-3 min-w-[140px]'>
              <div className='w-5 h-5 rounded' style={{ background: field.value || '#8B5CF6' }} />
              <Text type='font-14-400'>{field.value || '#8B5CF6'}</Text>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            {label && <Text type='font-14-600'>{label || '#8B5CF6'}</Text>}
            <div
              className={clsx(
                'rounded-xl hover:border-disabled focus:border-accent cursor-pointer h-[42px] bg-white p-3 flex items-center gap-2 border-1 border-solid border-neutral-01',
                {
                  [containerColorClassName]: !!containerColorClassName,
                },
              )}
            >
              <div className='w-5 h-5 rounded' style={{ background: field.value || '#8B5CF6' }} />
              <Text type='font-14-400'>{field.value || '#8B5CF6'}</Text>
            </div>
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent>
        <ColorPicker
          {...register(name)}
          value={field?.value || '8B5CF6'}
          onChange={handleChageValueColor}
        />
      </PopoverContent>
    </Popover>
  );
};
export default ColorPickerCustom;
