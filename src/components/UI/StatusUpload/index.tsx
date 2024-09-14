import clsx from 'clsx';

import { EnumStatusUpload } from '@utils/common';

import Text from '../Text';

const StatusUpload = ({ status, labelStatus }: { status: string; labelStatus: string }) => {
  return (
    <div
      className={clsx('rounded-lg w-max py-1 px-2 flex justify-center items-center', {
        'bg-[#F0FDF4] border-1 border-solid border-[#DCFCE7]': status === EnumStatusUpload.DONE,
        'bg-[#EFF6FF] border-1 border-solid border-[#DBEAFE]':
          status === EnumStatusUpload.PROCESSING,
        'bg-[#FEF2F2] border-1 border-solid border-[#FEE2E2]': status === EnumStatusUpload.FAIL,
      })}
    >
      <Text
        className={clsx({
          'text-[#15803D]': status === EnumStatusUpload.DONE,
          'text-[#1D4ED8]': status === EnumStatusUpload.PROCESSING,
          'text-[#B91C1C]': status === EnumStatusUpload.FAIL,
        })}
        type='font-12-500'
      >
        {labelStatus}
      </Text>
    </div>
  );
};
export default StatusUpload;
