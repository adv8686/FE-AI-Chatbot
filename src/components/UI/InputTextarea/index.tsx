/* eslint-disable indent */
import React, { ReactNode } from 'react';

import { Textarea } from '@nextui-org/react';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import Text from '../Text';

interface IInputTextarea {
  startContent?: ReactNode;
  endContent?: ReactNode;
  label?: string | ReactNode;
  placeholder?: string;
  control: Control;
  name: string;
  className?: string;
  required?: boolean;
  errors?: any;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  type?: any;
  size?: any;
  maxLength?: number;
}
const InputTextarea = (props: IInputTextarea) => {
  const {
    startContent,
    endContent,
    label,
    errors,
    placeholder,
    type,
    className = '',
    control,
    readOnly,
    isDisabled,
    required,
    defaultValue,
    name,
    maxLength,
    ...rest
  } = props;
  const { field } = useController({
    name,
    control,
    rules: { required },
  });

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between w-full'>
        {label && <Text type='font-14-600'>{label}</Text>}

        {maxLength && maxLength > 0 && (
          <Text type='font-12-400' className={clsx('text-neutral', {})}>
            {`${field?.value?.length || 0}/${maxLength}`}
          </Text>
        )}
      </div>
      <Textarea
        startContent={startContent}
        endContent={endContent}
        name={field?.name}
        variant='bordered'
        type={type}
        onBlur={field.onBlur}
        autoComplete='off'
        isDisabled={isDisabled}
        value={field?.value}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onChange={field?.onChange}
        radius='md'
        maxLength={maxLength}
        className={clsx({
          [className]: !!className,
        })}
        label={''}
        classNames={{
          inputWrapper: errors?.[name]?.message
            ? ['px-3 border-1 border-solid !border-red-500']
            : [
                'px-3 border-1 border-solid !border-neutral-01 data-[hover=true]:!border-disabled transition-all group-data-[focus=true]:!border-accent',
              ],
        }}
        placeholder={placeholder}
        labelPlacement='outside'
        {...rest}
      />
      {errors?.[name]?.message && required && (
        <Text type='font-14-400' className='text-danger'>
          {errors?.[name]?.message}
        </Text>
      )}
    </div>
  );
};
export default InputTextarea;
