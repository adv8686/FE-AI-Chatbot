/* eslint-disable no-empty-pattern */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';

import CustomModal from '@components/UI/CustomModal';
import InputText from '@components/UI/InputText';
import InputTextarea from '@components/UI/InputTextarea';
import Text from '@components/UI/Text';

interface IModalAddFaq {}

const ModalAddFaq = (props: IModalAddFaq, ref?: any) => {
  const {} = props;
  const [visible, setVisible] = useState(false);
  const { control } = useForm<any>({});

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setVisible(true);
      },
      onClose: () => setVisible(false),
    };
  });
  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <CustomModal
      placementMoblie='center'
      className='rounded-3xl'
      size='md'
      isOpen={visible}
      onClose={onVisible}
    >
      <>
        <ModalBody className='p-4 flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <Text type='font-20-600'>Add this Q&A to FAQ</Text>
            <Button onClick={onVisible} isIconOnly radius='full' size='md' variant='light'>
              <X size={20} weight='light' />
            </Button>
          </div>
          <InputText
            name='question'
            control={control}
            label='Question'
            placeholder='Enter question'
            size='lg'
          />
          <InputTextarea
            name='answer'
            label='Answer'
            control={control}
            placeholder='Enter answer'
            size='lg'
          />
          <div className='flex items-center gap-4 mt-4'>
            <Button onClick={onVisible} className='bg-neutral-01 w-full' radius='sm' size='lg'>
              <Text type='font-14-600'>Cancel</Text>
            </Button>
            <Button radius='sm' size='lg' className='bg-black w-full'>
              <Text type='font-14-600' className='text-white'>
                Create new FAQ
              </Text>
            </Button>
          </div>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalAddFaq);
