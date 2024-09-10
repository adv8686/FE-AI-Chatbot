/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/consistent-function-scoping */
import React, { useRef, useState } from 'react';

import { Button } from '@nextui-org/react';
import { UploadSimple } from '@phosphor-icons/react';

import Text from '../Text';

const DragDropUpload = () => {
  const [file, setFile] = useState<any>(undefined);
  const fileInputRef = useRef<any>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleClickUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className='flex flex-col items-center justify-center w-full min-h-[184px] border-1 border-dashed border-upload-border rounded-lg cursor-pointer bg-upload-accent p-12 hover:border-accent transition-all'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClickUpload}
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <Button
            isIconOnly
            size='lg'
            onClick={handleClickUpload}
            radius='sm'
            className='bg-white border-upload-border border-1 border-solid'
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
