/* eslint-disable quotes */
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button } from '@nextui-org/react';
import Image from 'next/image';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useFieldArray, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import CustomSelect from '@components/UI/CustomSelect';
import InputText from '@components/UI/InputText';
import InputTextarea from '@components/UI/InputTextarea';
import Text from '@components/UI/Text';

import CardSetupBot from '../CardSetupBot';

const ChatBotSchema = Yup.object().shape({
  phone: Yup.string().required('Số điện thoại không được để trống'),
});

const General = () => {
  const {
    formState: { errors },
    control,
  } = useForm<any>({
    resolver: yupResolver(ChatBotSchema),
    defaultValues: {
      items: [{ title: 'I’m having trouble with my account.' }],
    },
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'items',
  });

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    move(result.source.index, result.destination.index);
  };

  return (
    <>
      <CardSetupBot title='General' description='Set your bot name, timezone, languages, and more.'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Text type='font-14-600'>Bot Avatar</Text>
            <div className='flex items-center gap-2'>
              <Avatar className='w-12 h-12' />
              <Button variant='light' size='md' radius='md' color='secondary'>
                <Text type='font-14-600' className='text-accent'>
                  Change avatar
                </Text>
              </Button>
            </div>
          </div>
          <InputText
            required
            name='name'
            maxLength={40}
            errors={errors}
            label='Bot Name'
            control={control}
            placeholder='Demy Bot'
            size='lg'
          />
          <InputTextarea
            required
            name='description'
            maxLength={240}
            errors={errors}
            label='Description'
            control={control}
            placeholder='Your bot description'
            size='lg'
          />
          <InputText
            required
            name='message'
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
              size='lg'
              placeholder='No Category'
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
            <InputText
              required
              name='info'
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
              className='w-full'
              radius='md'
              size='lg'
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
              radius='md'
              size='lg'
              placeholder='(GMT+0) UTC'
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
          </div>
        </div>
      </CardSetupBot>
      <CardSetupBot
        title='Chat Suggestions'
        description='Enter up to 4 questions to help users get started with your bot.'
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='droppable-list'>
            {(provided) => (
              <div
                className='flex flex-col gap-3'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {fields?.map((item: any, index) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className='flex justify-between cursor-pointer items-center border-1 pr-3 pl-5 py-3 border-solid border-neutral-02 rounded-xl'
                        >
                          <div className='flex items-center gap-[10px]'>
                            <Image
                              src={'/static/icons/ic-dots.svg'}
                              width={8}
                              height={12}
                              alt=''
                              className='w-[8px] h-[12px]'
                            />
                            <Text type='font-14-400'>{item?.title}</Text>
                          </div>
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
                        </div>
                      )}
                    </Draggable>
                  );
                })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Button
          onClick={() => append({ title: `New Item ${fields.length + 1}` })}
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
      </CardSetupBot>
    </>
  );
};
export default General;
