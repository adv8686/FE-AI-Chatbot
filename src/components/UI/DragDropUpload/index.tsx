/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useRef } from 'react';

import { Button, Spinner } from '@nextui-org/react';
import { UploadSimple } from '@phosphor-icons/react';
import clsx from 'clsx';

import Text from '../Text';

const DragDropUpload = ({ handleDrop, handleFileChange, loading }: any) => {
  const fileInputRef = useRef<any>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClickUpload = () => {
    if (fileInputRef.current) {
      !loading && fileInputRef.current.click();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className={clsx(
          'flex flex-col items-center justify-center w-full min-h-[184px] border-1 border-dashed border-upload-border rounded-lg cursor-pointer bg-upload-accent p-12 hover:border-accent transition-all',
          {
            '!cursor-not-allowed hover:!border-upload-border': loading,
          },
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClickUpload}
      >
        <div className='flex flex-col items-center relative justify-center gap-2'>
          {loading && <Spinner className='absolute z-[1000]' color='white' />}

          <Button
            isIconOnly
            size='lg'
            disabled={!loading}
            onClick={handleClickUpload}
            radius='sm'
            className={clsx('bg-white border-upload-border border-1 border-solid', {
              '!cursor-not-allowed': loading,
            })}
          >
            <UploadSimple size={20} color='#8B5CF6' weight='light' />
          </Button>
          <div className='flex flex-col gap-1 text-center'>
            <Text type='font-14-400' className='text-secodary'>
              Choose a file{' '}
              <Text element='span' type='font-14-600' className='text-accent'>
                or drag & drop it here
              </Text>
            </Text>
            <Text type='font-12-400' className='text-neutral'>
              .pdf, .txt, .docx, .json, and .csv formats, up to 50MB
            </Text>
          </div>
        </div>
        <input
          ref={fileInputRef}
          id='file-upload'
          multiple
          accept='.pdf,.txt,.docx,.json,.csv'
          type='file'
          className='hidden'
          onChange={handleFileChange}
        />
      </div>

      {/* {file && (
        <div className="mt-3 text-sm text-purple-600">
          File selected: {file.name}, size: {(file.size / 1024).toFixed(2)} KB
        </div>
      )} */}
    </div>
  );
};

export default DragDropUpload;
