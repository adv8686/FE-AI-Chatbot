import InputText from '@components/UI/InputText';
import Text from '@components/UI/Text';
import { Avatar } from '@nextui-org/react';

const DataToday = [
  {
    id: 1,
    name: 'Deadpool',
    message: 'A retired model now enlisted in the army to fight',
    time: '3h',
  },
  {
    id: 2,
    name: 'Newsman',
    message:
      "While Saitama's strength remains constant, he undergoes personal growth  as he forms friendships, confronts his own limitations, and seeks  fulfillment beyond physical battles.",
    time: '3h',
  },
  {
    id: 3,
    name: 'Songoku',
    message: 'Kamekameha...',
    time: '12h',
  },
];

const DataPrevious = [
  {
    id: 1,
    name: 'Messi',
    message: 'A retired model now enlisted in the army to fight',
    time: '3h',
  },
  {
    id: 2,
    name: 'Donal Trump',
    message: "You're fired!",
    time: '3h',
  },
];
const DataPrevious30 = [
  {
    id: 1,
    name: 'Messi',
    message: 'A retired model now enlisted in the army to fight',
    count: '19/08',
  },
  {
    id: 2,
    name: 'Donal Trump',
    message: "You're fired!",
    count: '17/08',
  },
  {
    id: 4,
    name: 'Donal Trump',
    message: "You're fired!",
    count: '17/08',
  },
  {
    id: 5,
    name: 'Donal Trump',
    message: "You're fired!",
    count: '17/08',
  },
  {
    id: 6,
    name: 'Donal Trump',
    message: "You're fired!",
    count: '17/08',
  },
  {
    id: 7,
    name: 'Donal Trump',
    message: "You're fired!",
    count: '17/08',
  },
];
const ChatBotSidebar = ({ control }: any) => {
  return (
    <div className='border-1 rounded-lg  rounded-r-none border-solid border-neutral-01 py-4 pl-4 flex flex-col gap-4'>
      <div className='pr-4'>
        <InputText
          name='search'
          maxLength={40}
          control={control}
          placeholder='Search by user or keyword'
          size='lg'
        />
      </div>

      <div className='flex flex-col gap-4 max-h-[650px] overflow-auto scroll-custom pr-4'>
        <div className='flex flex-col gap-2'>
          <Text type='font-12-500' className='text-neutral'>
            Today
          </Text>
          <div>
            {DataToday?.map((item) => {
              return (
                <div key={item?.id} className='p-3 flex items-center gap-2'>
                  <div>
                    <Avatar className='w-9 h-9' />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <div className='flex items-center justify-between w-full'>
                      <Text type='font-14-600'>{item?.name}</Text>
                      <Text className='text-disabled' type='font-12-400'>
                        {item?.time}
                      </Text>
                    </div>
                    <Text type='font-12-400' className='text-neutral line-clamp-1'>
                      {item?.message}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Text type='font-12-500' className='text-neutral'>
            Previous 7 Days
          </Text>
          <div>
            {DataPrevious?.map((item) => {
              return (
                <div key={item?.id} className='p-3 flex items-center gap-2'>
                  <div>
                    <Avatar className='w-9 h-9' />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <div className='flex items-center justify-between w-full'>
                      <Text type='font-14-600'>{item?.name}</Text>
                      <Text className='text-disabled' type='font-12-400'>
                        {item?.time}
                      </Text>
                    </div>
                    <Text type='font-12-400' className='text-neutral line-clamp-1'>
                      {item?.message}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Text type='font-12-500' className='text-neutral'>
            Previous 30 Days
          </Text>
          <div>
            {DataPrevious30?.map((item) => {
              return (
                <div key={item?.id} className='p-3 flex items-center gap-2'>
                  <div>
                    <Avatar className='w-9 h-9' />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <div className='flex items-center justify-between w-full'>
                      <Text type='font-14-600'>{item?.name}</Text>
                      <Text className='text-disabled' type='font-12-400'>
                        {item?.count}
                      </Text>
                    </div>
                    <Text type='font-12-400' className='text-neutral line-clamp-1'>
                      {item?.message}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatBotSidebar;
