import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

interface ColumnsType {
  title: string;
  dataIndex: string;
  key?: string;
  render?: (text, data) => void;
}
interface ITableProps {
  dataSource: any[];
  columns: ColumnsType[];
  pagination?: boolean | object;
  pageSize?: number;
  totalDocs?: number;
  onPageChange?: (page) => void;
}

export default function Table({
  dataSource,
  columns,
  pagination = false,
  pageSize = 10,
  onPageChange,
  totalDocs = 0,
}: ITableProps) {
  const { t } = useTranslation();
  const handlePageChange = ({ selected }) => {
    if (onPageChange) {
      onPageChange(selected + 1);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
          <thead className="w-full text-sm text-gray-900 capitalize bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
            <tr>
              {columns?.map(column => (
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold"
                  key={column?.key ?? column?.dataIndex}
                >
                  {t(column?.title)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource?.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {columns.map((column, index) => (
                  <td key={index} className="px-6 py-4">
                    {column?.render
                      ? column?.render(data[column?.dataIndex], data)
                      : data[column?.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end w-100 mt-5">
        {totalDocs > pageSize && pagination ? (
          <ReactPaginate
            onPageChange={handlePageChange}
            pageCount={Math.ceil(totalDocs / pageSize)}
            previousLabel={t('Previous')}
            nextLabel={t('Next')}
            containerClassName={
              'flex w-[fit-content] bg-gray-800 text-[16px] rounded-[10px]'
            }
            pageLinkClassName={
              'flex justify-center items-center w-[45px] h-[40px] border border-gray-300 text-gray-400 leading-tight hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }
            previousLinkClassName={
              'flex justify-center items-center w-[fit-content] px-3 h-[40px] border border-gray-300 leading-tight rounded-l-[10px] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }
            nextLinkClassName={
              'flex justify-center items-center w-[fit-content] px-3 h-[40px] border border-gray-300 leading-tight rounded-r-[10px] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }
            activeLinkClassName={
              'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:bg-gray-1000'
            }
          />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
