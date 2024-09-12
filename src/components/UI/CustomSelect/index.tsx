import { Select, SelectItem } from '@nextui-org/react';
import { Control, useController } from 'react-hook-form';

import Text from '../Text';

interface IOptions {
  label: string;
  value: string | number;
}
interface ICustomSelect {
  options: IOptions[];
  placeholder?: string;
  className?: string;
  selectionMode?: 'single' | 'multiple';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  label?: string;
  name?: any;
  control?: Control;
}
const CustomSelect = (props: ICustomSelect) => {
  const {
    options,
    label,
    size,
    placeholder,
    selectionMode,
    radius,
    control,
    name,
    className = '',
    ...rest
  } = props;

  const { field } = useController({
    name,
    control,
  });

  return (
    <div className='flex flex-col gap-2 '>
      {label && <Text type='font-14-600'>{label}</Text>}

      <Select
        classNames={{
          popoverContent: ['!text-black bg-none'],
          value: ['!text-black text-[14px] font-normal'],
          selectorIcon: ['w-5 h-5'],
          trigger: [
            'bg-white data-[hover=true]:bg-white transition-all group-data-[focus=true]:!border-accent data-[hover=true]:border-disabled !px-3 border-1 border-neutral-01 border-solid',
          ],
        }}
        label={''}
        name={field?.name}
        value={field?.value}
        onChange={field?.onChange}
        // labelPlacement='inside'
        radius={radius}
        size={size}
        selectionMode={selectionMode}
        className={className}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((item) => (
          <SelectItem key={item.value}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
export default CustomSelect;
