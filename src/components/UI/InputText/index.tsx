/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable indent */
import React, { ReactNode } from 'react';

import { Input } from '@nextui-org/react';
import clsx from 'clsx';
import { Control, useController } from 'react-hook-form';

import Text from '../Text';

interface IInputText {
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
  autoFocus?: boolean;
  ref?: any;
  botSetting?: boolean;
  messageError?: string;
}
const InputText = (props: IInputText) => {
  const {
    startContent,
    endContent,
    label,
    errors,
    autoFocus,
    placeholder,
    type,
    className = '',
    control,
    readOnly,
    isDisabled,
    required,
    defaultValue,
    botSetting,
    name,
    ref,
    maxLength,
    ...rest
  } = props;
  const { field } = useController({
    name,
    control,
    rules: { required },
  });

  return (
    <div className='flex flex-col gap-2 w-full z-[10000]'>
      {label && (
        <div className='flex items-center justify-between w-full'>
          <Text type='font-14-600'>{label}</Text>

          {maxLength && maxLength > 0 && (
            <Text type='font-12-400' className={clsx('text-neutral', {})}>
              {`${field?.value?.length || 0}/${maxLength}`}
            </Text>
          )}
        </div>
      )}

      <Input
        ref={ref}
        startContent={startContent}
        endContent={endContent}
        name={field?.name}
        variant='bordered'
        type={type}
        // onClick={onClick}
        autoFocus={autoFocus}
        onBlur={field.onBlur}
        autoComplete='off'
        isDisabled={isDisabled}
        value={field?.value}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onChange={field?.onChange}
        radius='md'
        maxLength={maxLength}
        className={clsx('rounded-full', {
          [className]: !!className,
        })}
        label={''}
        classNames={{
          inputWrapper: errors?.[name]?.message
            ? ['px-3 border-1 border-solid !border-red-500']
            : botSetting
            ? [
                'px-3 border-1 border-solid border-neutral-01 transition-all data-[hover=true]:!border-disabled group-data-[focus=true]:!border-disabled',
              ]
            : [
                'px-3 border-1 border-solid border-neutral-01 transition-all data-[hover=true]:!border-disabled group-data-[focus=true]:!border-accent',
              ],
          input: startContent
            ? ['ml-2 placeholder:text-placeholder']
            : ['placeholder:text-placeholder'],
        }}
        placeholder={placeholder}
        labelPlacement='outside'
        {...rest}
      />
      {(errors?.[name]?.message || required) && (
        <Text type='font-14-400' className='text-danger'>
          {errors?.[name]?.message}
        </Text>
      )}
    </div>
  );
};
export default InputText;
