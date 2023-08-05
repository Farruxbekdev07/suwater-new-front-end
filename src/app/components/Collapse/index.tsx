import Button from 'UI/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

interface ITableProps {
  dataSource: any;
  mode?: any;
  onPageChange?: (page) => void;
}

export default function Collapsible({ dataSource, mode }: ITableProps) {
  const { t } = useTranslation();
  const [open, setOPen] = React.useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div
      className={`relative overflow-x-auto ${
        mode === true
          ? 'border border-gray-300 dark:border-gray-300 dark:text-black text-black'
          : 'dark:bg-gray-800 bg-gray-800 dark:text-gray-400 text-gray-400 border border-gray-700 dark:border-gray-700'
      }`}
    >
      <div
        onClick={toggle}
        className="flex justify-between items-center px-5 py-2 pr-1"
      >
        <p className="font-[500] font-sans text-[16px]">{dataSource?.name}</p>
        <Button type="outline" className="border-0" mode={mode}>
          {dataSource?.action}
        </Button>
      </div>
      <div className="px-5">
        {open && (
          <div>
            <div className="toggle">
              <h4 className="text-[14px]">{dataSource?.text}</h4>
            </div>
            <div className="flex justify-end gap-2 py-5">
              <Button type="outline" mode={mode}>
                O'chirish
              </Button>
              <Button>Orqaga</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
