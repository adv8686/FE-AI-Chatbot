/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable quotes */

import { useRef } from 'react';

import { closestCenter, DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Avatar, Button } from '@nextui-org/react';
import Image from 'next/image';
import { useFieldArray } from 'react-hook-form';

import CustomSelect from '@components/UI/CustomSelect';
import InputText from '@components/UI/InputText';
import InputTextarea from '@components/UI/InputTextarea';
import Text from '@components/UI/Text';
import { toast } from '@components/UI/Toast/toast';
import { getTimeZone, ListCategory } from '@utils/common';

import CardSetupBot from '../CardSetupBot';
import ListTimeZone from '../timezone.json';

const General = ({ control, watch, register, errors, setValue }: any) => {
  const fileInputRef = useRef<any>(null);
  const avatar = watch('avatar');
  const timeZone = getTimeZone();
  const valueTimeZoneDetect = ListTimeZone.find((item) => item.utc.includes(timeZone));

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'chatSuggestions',
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = fields?.findIndex((item) => item.id === active.id);
      const newIndex = fields?.findIndex((item) => item.id === over.id);
      move(oldIndex, newIndex);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      toast.error('Only upload PNG or JPG files!');
      event.target.value = null;
      return;
    }

    if (file.size > maxSize) {
      alert('File size must be less than 5MB!');
      event.target.value = null;
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newValue = {
          file,
          url: reader.result,
        };
        setValue('avatar', newValue);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeAvatar = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <CardSetupBot title='General' description='Set your bot name, timezone, languages, and more.'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-600'>Bot Avatar</Text>
            <div className='flex items-center gap-2'>
              <Avatar src={avatar?.url || ''} className='w-12 h-12' />
              <input
                {...register('avatar')}
                type='file'
                ref={fileInputRef}
                accept='.png, .jpg, .jpeg'
                className='hidden'
                onChange={handleFileChange}
              />
              <Button
                onClick={handleChangeAvatar}
                variant='light'
                size='md'
                radius='md'
                color='secondary'
              >
                <Text type='font-14-600' className='text-accent'>
                  Change avatar
                </Text>
              </Button>
            </div>
          </div>
          <InputText
            name='botname'
            maxLength={40}
            errors={errors}
            label='Bot Name'
            control={control}
            placeholder='Demy Bot'
            size='lg'
          />
          <InputTextarea
            name='description'
            maxLength={240}
            errors={errors}
            label='Description'
            control={control}
            placeholder='Your bot description'
            size='lg'
          />
          <InputText
            name='welcomeMessage'
            maxLength={120}
            errors={errors}
            label='Welcome Message'
            control={control}
            placeholder={
              "Hi there! 👋 I'm here to help you with any questions or issues you might have. How can I assist you?"
            }
            size='lg'
          />
          <div className='grid grid-cols-2 gap-4'>
            <CustomSelect
              label='Category'
              className='w-full'
              radius='md'
              control={control}
              name='categoryId'
              size='lg'
              placeholder='No Category'
              options={ListCategory}
            />
            <InputText
              name='contactInfo'
              errors={errors}
              label='Contact Info'
              control={control}
              placeholder={'support@sample.com'}
              size='lg'
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <CustomSelect
              label='Language'
              control={control}
              className='w-full'
              radius='md'
              size='lg'
              name='language'
              placeholder='English'
              options={[
                {
                  value: 1,
                  label: 'Category 1',
                },
                {
                  value: 2,
                  label: 'Category 2',
                },
                {
                  value: 3,
                  label: 'Category 3',
                },
              ]}
            />
            <CustomSelect
              label='Timezone'
              className='w-full'
              control={control}
              name='timezone'
              defaultSelectedKeys={[valueTimeZoneDetect?.value]}
              radius='md'
              size='lg'
              placeholder='(GMT+0) UTC'
              options={ListTimeZone?.map((item) => {
                return {
                  label: item?.text,
                  value: item?.value,
                };
              })}
            />
          </div>
        </div>
      </CardSetupBot>
      <CardSetupBot
        title='Chat Suggestions'
        description='Enter up to 4 questions to help users get started with your bot.'
      >
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={fields?.map((item) => item.id) || []}
            strategy={verticalListSortingStrategy}
          >
            <div className='flex flex-col gap-3'>
              {fields?.length &&
                fields?.map((item: any, index) => (
                  <SortableItem
                    control={control}
                    key={item.id}
                    item={item}
                    index={index}
                    remove={remove}
                  />
                ))}
            </div>
          </SortableContext>
        </DndContext>
        {fields?.length && fields?.length < 4 && (
          <Button
            onClick={() => append({ title: `Enter suggestion ${fields.length + 1}` })}
            radius='sm'
            variant='light'
            size='md'
            color='secondary'
            className='w-max'
          >
            <Text type='font-14-600' className='text-accent'>
              Add new suggestion
            </Text>
          </Button>
        )}
      </CardSetupBot>
    </>
  );
};
export default General;

const SortableItem = ({ item, index, remove, control }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <InputText
        maxLength={34}
        name={`chatSuggestions.${index}.title`}
        startContent={
          <div {...attributes} {...listeners}>
            <Image
              src={'/static/icons/ic-dots.svg'}
              width={8}
              height={12}
              alt=''
              className='w-[8px] h-[12px]'
            />
          </div>
        }
        endContent={
          <Button
            onClick={() => remove(index)}
            variant='light'
            size='sm'
            color='danger'
            isIconOnly
            className='rounded-full'
          >
            <Image
              src={'/static/icons/ic-close-danger.svg'}
              width={14}
              height={14}
              alt=''
              className='w-[14px] h-[14px]'
            />
          </Button>
        }
        control={control}
        placeholder={`Enter suggestion ${index + 1}`}
        size='lg'
        {...attributes}
      />
    </div>
  );
};
