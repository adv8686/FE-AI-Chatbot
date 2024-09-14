/* eslint-disable no-empty-pattern */
import { forwardRef, useImperativeHandle, useState } from 'react';

import { Button, ModalBody } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';

import CustomModal from '@components/UI/CustomModal';
import Text from '@components/UI/Text';

interface IModalDiscardChanges {}

const ModalDiscardChanges = (props: IModalDiscardChanges, ref?: any) => {
  const {} = props;
  const [visible, setVisible] = useState(false);

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
            <Text type='font-20-600'>Discard Changes</Text>
            <Button onClick={onVisible} isIconOnly radius='full' size='md' variant='light'>
              <X size={20} weight='light' />
            </Button>
          </div>
          <Text type='font-14-400'>
            Are you sure you want to discard your changes? Any unsaved progress will be lost.
          </Text>
          <div className='flex items-center gap-4'>
            <Button onClick={onVisible} className='bg-neutral-01 w-full' radius='sm' size='lg'>
              <Text type='font-14-600'>Cancel</Text>
            </Button>
            <Button radius='sm' size='lg' className='bg-danger-1 w-full'>
              <Text type='font-14-600' className='text-white'>
                Discard
              </Text>
            </Button>
          </div>
        </ModalBody>
      </>
    </CustomModal>
  );
};
export default forwardRef(ModalDiscardChanges);
