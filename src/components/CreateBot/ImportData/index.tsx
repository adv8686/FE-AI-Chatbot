/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
/* eslint-disable indent */
import { useRef, useState } from 'react';

import { Button, Spinner } from '@nextui-org/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import DragDropUpload from '@components/UI/DragDropUpload';
import IconDeleteDanger from '@components/UI/Icons';
import InputText from '@components/UI/InputText';
import StatusUpload from '@components/UI/StatusUpload';
import TableCustom from '@components/UI/Table';
import Text from '@components/UI/Text';
import { toast } from '@components/UI/Toast/toast';
import { EnumStatusUpload, renderStatusUpload } from '@utils/common';

import CardSetupBot from '../CardSetupBot';
import ModalDeleteFile from '../ModalDeleteFile';
import NoDataUpload from '../NoDataUpload';
import { useCrawlChildLink, useCrawlerFile, useDeleteFile } from '../service';

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

const ImportData = ({ errors, trigger, control, watch, register }: any) => {
  const watchedUrl = watch('url');

  const router = useRouter();

  const [listFileUpload, setListFileUpload] = useState<any>([]);

  const refModalDeleteFile: any = useRef();

  const requestCrawlChildLink = useCrawlChildLink({
    onSuccess: () => {
      toast.success('Submit url successfully');
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const requestDeleteFile = useDeleteFile({
    onSuccess: (res: any) => {
      console.log(res, 'res');
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const requestCrawlerFile = useCrawlerFile({
    onSuccess: (res: any) => {
      setListFileUpload(res?.data?.uploadedFiles);
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

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
            <Text type='font-14-600'>{record?.name || '-'}</Text>
          </div>
        );
      }

      case 'uploaded_at': {
        return (
          <Text className='text-secodary' type='font-14-400'>
            {dayjs(record?.timestamp).format('DD/MM/YYYY') || '-'}
          </Text>
        );
      }
      case 'status': {
        return (
          <>
            <StatusUpload
              labelStatus={renderStatusUpload(EnumStatusUpload.DONE)}
              status={EnumStatusUpload.DONE}
            />
          </>
        );
      }

      case 'action': {
        return (
          <Button
            onClick={() => refModalDeleteFile.current.onOpen(record.name)}
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

  // const validateFile = (files: any) => {
  //   const allowedFormats = new Set([
  //     'application/pdf',
  //     'text/plain',
  //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //     'application/json',
  //     'text/csv',
  //   ]);
  //   const maxFileSize = 50 * 1024 * 1024; // 50MB

  //   for (const file of files) {
  //     // Check file size
  //     if (file.size > maxFileSize) {
  //       return { valid: false, message: `File ${file.name} exceeds 50MB.` };
  //     }

  //     // Check file format
  //     if (!allowedFormats.has(file.type)) {
  //       return { valid: false, message: `File ${file.name} has an invalid format.` };
  //     }
  //   }

  //   return { valid: true, message: 'All files are valid' };
  // };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    const body = {
      botId: router.query.idBot as string,
      files: [...files],
    };

    requestCrawlerFile.run(body);
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;

    const body = {
      botId: router.query.idBot as string,
      files: [...files],
    };

    requestCrawlerFile.run(body);
  };

  const handleDeleteFile = (name: string) => {
    const newData = listFileUpload?.filter((item: any) => item?.name !== name);
    setListFileUpload(newData);

    const body = {
      docName: name,
      botId: router.query.idBot as string,
    };

    requestDeleteFile?.run(body);
  };

  const handleSubmitUrl = async () => {
    const isValid = await trigger('url');
    if (isValid) {
      const body = {
        url: watchedUrl,
        botId: router.query.idBot as string,
      };
      requestCrawlChildLink.run(body);
    }
  };

  return (
    <>
      <CardSetupBot title='From Website' description='Import data using a website URL'>
        <div className='flex flex-col gap-2 '>
          <Text type='font-14-600'>Website URL</Text>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <InputText
                name='url'
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
              <Button
                onClick={handleSubmitUrl}
                size='lg'
                isDisabled={!watchedUrl}
                radius='md'
                spinner={<Spinner size='sm' color='white' />}
                isLoading={requestCrawlChildLink?.loading}
                className='bg-black'
              >
                <Text type='font-14-400' className='text-white'>
                  Submit URL
                </Text>
              </Button>
            </div>
            {errors?.url?.message && (
              <Text type='font-12-400' className='text-danger-1'>
                {errors?.url?.message}
              </Text>
            )}
          </div>
        </div>
      </CardSetupBot>
      <CardSetupBot title='From Files' description='Upload a file to import data'>
        <div className='flex flex-col gap-4'>
          <DragDropUpload
            {...register('files')}
            handleDrop={handleDrop}
            loading={requestCrawlerFile?.loading}
            handleFileChange={handleFileChange}
          />
          <TableCustom
            emptyContent={<NoDataUpload />}
            renderCell={renderCell}
            columns={columns}
            dataSource={listFileUpload}
          />
        </div>
      </CardSetupBot>
      <ModalDeleteFile handleDeleteFile={handleDeleteFile} ref={refModalDeleteFile} />
    </>
  );
};
export default ImportData;
