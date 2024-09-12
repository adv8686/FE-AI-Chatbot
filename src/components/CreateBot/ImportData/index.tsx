/* eslint-disable indent */
import { useRef } from 'react';

import { Button } from '@nextui-org/react';
import dayjs from 'dayjs';
import { uuid } from 'uuidv4';

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

const ImportData = ({ errors, control, watch, setValue, register }: any) => {
  const watchedUrl = watch('url');
  const watchedFiles = watch('files');

  console.log(watchedFiles, 'watchedFiles');

  const refModalDeleteFile: any = useRef();

  const renderCell = (record: any, columnKey: any) => {
    const cellValue = record[columnKey];

    switch (columnKey) {
      case 'file_number': {
        return (
          <Text className='text-secodary' type='font-14-400'>
            {`${record?.key + 1}/10` || '-'}
          </Text>
        );
      }
      case 'name': {
        return (
          <div className='w-[200px] line-clamp-1 cursor-pointer'>
            <Text type='font-14-600'>{record?.fileName || '-'}</Text>
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
        return <>{record?.status ? <StatusUpload status={record?.status} /> : <>-</>}</>;
      }

      case 'action': {
        return (
          <Button
            onClick={() => refModalDeleteFile.current.onOpen(record.id)}
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

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const arrayFiles = [...watchedFiles];
      const newObjFile = {
        id: uuid(),
        fileName: files?.[0]?.name,
        uploaded_at: dayjs(files?.[0]?.lastModifiedDate).format('DD/MM/YYYY'),
        file: files?.[0],
      };
      arrayFiles.unshift(newObjFile);
      setValue('files', arrayFiles);
    }
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    const fileArray = [...files].map((file: any) => ({
      id: uuid(),
      fileName: file.name,
      uploaded_at: dayjs(file.lastModifiedDate).format('DD/MM/YYYY'),
    }));

    if (fileArray.length > 0) {
      const arrayFiles = [...watchedFiles];

      arrayFiles.unshift(...fileArray);

      setValue('files', arrayFiles);
    }
  };

  const handleDeleteFile = (id: string) => {
    const newValue = watchedFiles?.filter((item: any) => item?.id !== id);
    setValue('files', newValue);
  };

  return (
    <>
      <CardSetupBot title='From Website' description='Import data using a website URL'>
        <div className='flex flex-col gap-2 '>
          <Text type='font-14-600'>Website URL</Text>
          <div className='flex items-center gap-2'>
            <InputText
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
          <DragDropUpload
            {...register('files')}
            handleDrop={handleDrop}
            handleFileChange={handleFileChange}
          />
          <TableCustom
            emptyContent={<NoDataUpload />}
            renderCell={renderCell}
            columns={columns}
            dataSource={watchedFiles}
          />
        </div>
      </CardSetupBot>
      <ModalDeleteFile handleDeleteFile={handleDeleteFile} ref={refModalDeleteFile} />
    </>
  );
};
export default ImportData;
