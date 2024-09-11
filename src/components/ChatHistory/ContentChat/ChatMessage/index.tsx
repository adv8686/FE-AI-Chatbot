import Text from '@components/UI/Text';
import { Avatar, Button } from '@nextui-org/react';

const DataChatSettle = [
  {
    id: 1,
    user: 'bot',
    name: 'Demy bot',
    text: "Oh, I'm sorry to hear that. Let me double-check the code on our end to ensure there were no errors.",
  },
  {
    id: 2,
    user: 'me',
    name: 'Dealpool',
    avatar: '/static/icons/avatar-buyer.svg',
    text: "Oh, I'm sorry to hear that. Let me double-check the code on our end to ensure there were no errors.",
  },
  {
    id: 3,
    name: 'Demy bot',

    user: 'bot',
    text: "Oh, I'm sorry to hear that. Let me double-check the code on our end to ensure there were no errors.",
  },
  {
    id: 4,
    user: 'me',
    name: 'Dealpool',

    avatar: '/static/icons/avatar-buyer.svg',
    text: "Alright, I'll check that right away. It seems there might have been a mistake in generating the code",
  },
  {
    id: 5,
    user: 'bot',
    name: 'Demy bot',

    text: 'No problem, I understand mistakes happen. I just hope we can resolve this quickly as I need to access the product soon',
  },
  {
    id: 6,
    user: 'me',
    name: 'Dealpool',

    avatar: '/static/icons/avatar-buyer.svg',
    text: "I completely understand. I've escalated the issue to our technical team, and they are working on generating a new code for you. Once it's ready, I'll send it to your email immediately.",
  },
  {
    id: 6,
    name: 'Demy bot',

    user: 'bot',

    text: "I completely understand. I've escalated the issue to our technical team, and they are working on generating a new code for you. Once it's ready, I'll send it to your email immediately.",
  },
  {
    id: 7,
    address: 'fes123..hi453',
    name: 'Dealpool',

    user: 'me',
    avatar: '/static/icons/avatar-buyer.svg',
    text: "I completely understand. I've escalated the issue to our technical team, and they are working on generating a new code for you. Once it's ready, I'll send it to your email immediately.",
  },
];
const ChatMessage = ({ control }: any) => {
  return (
    <div className='border-1 rounded-lg border-l-0 h-full rounded-tl-none rounded-bl-none border-solid border-neutral-01 p-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-6 max-h-[640px] overflow-auto pr-6 scroll-custom'>
        {DataChatSettle?.map((item) => {
          return (
            <div key={item?.id}>
              {item?.user === 'bot' ? <MessaeBot item={item} /> : <MessaeUser item={item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ChatMessage;

const MessaeBot = ({ item }: any) => {
  return (
    <div className='flex gap-2 w-6/12'>
      <div>
        <Avatar className='w-9 h-9' />
      </div>
      <div className='flex flex-col gap-2'>
        <Text type='font-12-600'>{item?.name}</Text>
        <div className='rounded-[0_12px_12px_12px] bg-neutral-01 py-3 px-4'>
          <Text type='font-14-400' className='text-secodary'>
            {item?.text}
          </Text>
        </div>
        {item?.user === 'bot' && (
          <Button
            size='md'
            className='bg-white border-1 border-solid border-neutral-01 w-max'
            radius='lg'
          >
            <Text className='text-accent' type='font-12-500'>
              Add this Q&A to FAQ
            </Text>
          </Button>
        )}
      </div>
    </div>
  );
};
const MessaeUser = ({ item }: any) => {
  return (
    <div className='flex gap-2 justify-end'>
      <div className='flex flex-col gap-2 w-6/12'>
        <Text type='font-12-600'>{item?.name}</Text>
        <div className='rounded-[12px_0_12px_12px] bg-fill-accent py-3 px-4'>
          <Text type='font-14-400' className='text-white'>
            {item?.text}
          </Text>
        </div>
      </div>
      <div>
        <Avatar className='w-9 h-9' src={item?.avatar} />
      </div>
    </div>
  );
};
