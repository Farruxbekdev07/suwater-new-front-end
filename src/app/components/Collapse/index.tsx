import Button from 'UI/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DELETE_ANNOUNCEMENT } from 'app/pages/Messages/api';
import { useMutation } from '@apollo/client';

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

  const [deleteAnnouncement, { data: deleteAnnouncementData }] =
    useMutation(DELETE_ANNOUNCEMENT);

  const handleDelete = id => {
    deleteAnnouncement({
      variables: {
        Id: id,
      },
    });
  };

  return (
    <div
      className={`relative overflow-x-auto ${
        mode === true
          ? 'border border-gray-300 text-black'
          : 'bg-gray-800 text-gray-400 border border-gray-700'
      }`}
    >
      <div className="flex justify-between items-center px-5 py-2 pr-1">
        <p onClick={toggle} className="font-[500] font-sans text-[16px]">
          {dataSource?.title}
        </p>
        <Button
          type="outline"
          className="border-0"
          mode={mode}
          onClick={() => handleDelete(dataSource?._id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </div>
      <div className="px-5">
        {open && (
          <div>
            <div className="toggle">
              <h4 className="text-[14px]">{dataSource?.description}</h4>
            </div>
            <div className="flex justify-end gap-2 py-5">
              <Button
                type="outline"
                mode={mode}
                onClick={() => handleDelete(dataSource?._id)}
              >
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
