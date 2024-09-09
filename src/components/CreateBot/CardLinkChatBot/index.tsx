import { Button } from '@nextui-org/react';
import { Copy } from '@phosphor-icons/react';

import Text from '@components/UI/Text';

const CardLinkChatBot = () => {
  return (
    <div className='bg-white border-1 border-solid border-neutral-01 rounded-lg p-4 flex justify-between'>
      <div className='flex flex-col gap-1 w-8/12'>
        <Text type='font-14-600'>Link to Chatbot</Text>
        <Text
          type='font-14-400'
          className='text-accent break-words whitespace-normal overflow-hidden'
        >
          https://demy.ai/chat/66cc43fe7453d2f35b26c38e
        </Text>
      </div>
      <Button variant='light' size='sm' isIconOnly className='rounded-full'>
        <Copy size={14} weight='light' color='#74787C' />
      </Button>
    </div>
  );
};
export default CardLinkChatBot;
