import ChatBotSidebar from './ChatBotSidebar';
import ChatMessage from './ChatMessage';

const ContentChat = ({ control }: any) => {
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-2'>
        <ChatBotSidebar control={control} />
      </div>
      <div className='col-span-4'>
        <ChatMessage control={control} />
      </div>
    </div>
  );
};
export default ContentChat;
