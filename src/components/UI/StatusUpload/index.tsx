import clsx from 'clsx';

import Text from '../Text';

const StatusUpload = ({ status }: { status: string }) => {
  return (
    <div
      className={clsx('rounded-lg w-max py-1 px-2 flex justify-center items-center', {
        'bg-[#F0FDF4] border-1 border-solid border-[#DCFCE7]': status === 'Trained',
        'bg-[#EFF6FF] border-1 border-solid border-[#DBEAFE]': status === 'Extracting',
        'bg-[#FEF2F2] border-1 border-solid border-[#FEE2E2]': status === 'Error',
      })}
    >
      <Text
        className={clsx({
          'text-[#15803D]': status === 'Trained',
          'text-[#1D4ED8]': status === 'Extracting',
          'text-[#B91C1C]': status === 'Error',
        })}
        type='font-12-500'
      >
        {status}
      </Text>
    </div>
  );
};
export default StatusUpload;
