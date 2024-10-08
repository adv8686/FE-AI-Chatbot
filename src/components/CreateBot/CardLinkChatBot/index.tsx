import { Button } from '@nextui-org/react';
import { Copy } from '@phosphor-icons/react';

import Text from '@components/UI/Text';
import { toast } from '@components/UI/Toast/toast';

const CardLinkChatBot = ({ idBot }: { idBot: string }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://sdk-chat-test.vercel.app/?botId=${idBot}`);
    toast.success('Copy link to chatbot successfully');
  };
  return (
    <div className='bg-white border-1 border-solid border-neutral-01 rounded-lg p-4 flex justify-between'>
      <div className='flex flex-col gap-1 w-8/12'>
        <Text type='font-14-600'>Link to Chatbot</Text>
        <Text
          onClick={() => {
            window.open(`https://sdk-chat-test.vercel.app/?botId=${idBot}`);
          }}
          type='font-14-400'
          className='text-accent break-words whitespace-normal overflow-hidden hover:underline cursor-pointer'
        >
          {`https://sdk-chat-test.vercel.app/?botId=${idBot}`}
        </Text>
      </div>
      <Button onClick={handleCopy} variant='light' size='sm' isIconOnly className='rounded-full'>
        <Copy size={14} weight='light' color='#74787C' />
      </Button>
    </div>
  );
};
export default CardLinkChatBot;
