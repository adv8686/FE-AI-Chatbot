/* eslint-disable indent */
import { useRef } from 'react';

import { Button } from '@nextui-org/react';

import DragDropUpload from '@components/UI/DragDropUpload';
import IconDeleteDanger from '@components/UI/Icons';
import InputText from '@components/UI/InputText';
import StatusUpload from '@components/UI/StatusUpload';
import TableCustom from '@components/UI/Table';
import Text from '@components/UI/Text';

import CardSetupBot from '../CardSetupBot';
import ModalDeleteFile from '../ModalDeleteFile';
import NoDataUpload from '../NoDataUpload';

const columns = [
  {
    key: 'file_number',
    label: 'File Number',
  },
  {
    key: 'name',
    label: 'File Name',
  },
  {
    key: 'uploaded_at',
    label: 'Uploaded At',
  },
  {
    key: 'status',
    label: 'Status',
  },

  {
    key: 'action',
    label: '',
  },
];

const dataTable = [
  {
    id: 1,
    file_number: '1/10',
    name: 'demy-bot-example.csv',
    uploaded_at: '31/08/2024',
    status: 'Trained',
  },
  {
    id: 2,
    file_number: '2/10',
    name: 'demy-bot-example.csv',
    uploaded_at: '31/08/2024',
    status: 'Trained',
  },
  {
    id: 3,
    file_number: '3/10',
    name: 'demy-bot-example.csv',
    uploaded_at: '31/08/2024',
    status: 'Extracting',
  },
  {
    id: 4,
    file_number: '4/10',
    name: 'demy-bot-example.csv',
    uploaded_at: '31/08/2024',
    status: 'Error',
  },
  {
    id: 5,
    file_number: '5/10',
    name: 'demy-bot-example.csv',
    uploaded_at: '31/08/2024',
    status: 'Trained',
  },
];

const ImportData = ({ errors, control, watch }: any) => {
  const watchedUrl = watch('url');
  const refModalDeleteFile: any = useRef();

  const renderCell = (record: any, columnKey: any) => {
    const cellValue = record[columnKey];

    switch (columnKey) {
      case 'file_number': {
        return (
          <Text className='text-secodary' type='font-14-400'>
            {record?.file_number || '-'}
          </Text>
        );
      }
      case 'name': {
        return (
          <div className='w-[200px]'>
            <Text type='font-14-600'>{record?.name || '-'}</Text>
          </div>
        );
      }

      case 'uploaded_at': {
        return (
          <Text className='text-secodary' type='font-14-400'>
            {record?.uploaded_at || '-'}
          </Text>
        );
      }
      case 'status': {
        return <StatusUpload status={record?.status} />;
      }

      case 'action': {
        return (
          <Button
            onClick={() => refModalDeleteFile.current.onOpen()}
            isIconOnly
            size='md'
            radius='full'
            variant='light'
          >
            <IconDeleteDanger />
          </Button>
        );
      }
      default: {
        return cellValue;
      }
    }
  };

  return (
    <>
      <CardSetupBot title='From Website' description='Import data using a website URL'>
        <div className='flex flex-col gap-2 '>
          <Text type='font-14-600'>Website URL</Text>
          <div className='flex items-center gap-2'>
            <InputText
              required
              name='url'
              errors={errors}
              control={control}
              className='w-full'
              placeholder={'Enter website URL'}
              size='lg'
              startContent={
                <div className='w-max flex justify-center items-center  pr-3  h-full border-r-1 border-solid border-r-neutral-01'>
                  <Text type='font-14-400' className='text-neutral'>
                    https://
                  </Text>
                </div>
              }
            />
            <Button size='lg' isDisabled={!watchedUrl} radius='md' className='bg-black'>
              <Text type='font-14-400' className='text-white'>
                Submit URL
              </Text>
            </Button>
          </div>
        </div>
      </CardSetupBot>
      <CardSetupBot title='From Files' description='Upload a file to import data'>
        <div className='flex flex-col gap-4'>
          <DragDropUpload />
          <TableCustom
            emptyContent={<NoDataUpload />}
            renderCell={renderCell}
            columns={columns}
            dataSource={dataTable}
          />
        </div>
      </CardSetupBot>
      <ModalDeleteFile ref={refModalDeleteFile} />
    </>
  );
};
export default ImportData;
