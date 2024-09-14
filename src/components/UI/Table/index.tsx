/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from '@nextui-org/react';
import clsx from 'clsx';

const classNames = {
  wrapper: ['px-0 shadow-none'],
  th: [
    'text-[14px]',
    '!text-neutral',
    'font-normal',
    'bg-white border-b-1 border-solid border-b-neutral-01 pl-0',
  ],
  td: ['py-2 pl-0'],
  tr: ['border-b-1 border-solid border-b-neutral-01 w-full'],
};

export interface IColumns {
  key: string;
  label: string;
  width?: number | string;
  tooltip?: boolean;
  messageTooltip?: string;
}

interface ITableProps {
  columns: IColumns[];
  dataSource?: any;
  emptyContent?: ReactNode;
  loading?: boolean;
  renderCell?: any;
}
const TableCustom = (props: ITableProps) => {
  const { columns, dataSource, emptyContent, loading = false, renderCell } = props;

  return (
    <Table classNames={classNames} isCompact>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn width={400} key={column.key}>
            <div className='flex items-center gap-1'>{column.label}</div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        loadingContent={<Spinner color='success' />}
        isLoading={loading}
        emptyContent={emptyContent || 'No users found'}
        items={dataSource?.map((item: any, index: any) => {
          return {
            key: index,
            ...item,
          };
        })}
      >
        {(item: any) => {
          const animationDelay = `${Number(item?.key) * 0.05}s`;
          return (
            <TableRow
              key={item.key}
              className={clsx('animate-tableRow  ease-expo transition-all duration-300 opacity-0')}
              style={{ animationDelay }}
            >
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};
export default TableCustom;
