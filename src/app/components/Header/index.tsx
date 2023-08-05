import React from 'react';
import {
  ListBulletIcon,
  QueueListIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import Button from 'UI/Button';
import usericon from 'media/images/user-icon2.png';

function Header({ mode, changeMode, open, setOpenSidebar }) {
  const handleToggle = () => {
    if (open) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };
  return (
    <header
      className={`${
        mode
          ? 'bg-white dark:bg-white shadow-xl'
          : 'bg-gray-800 dark:bg-gray-900 shadow-gray-700 shadow-xl'
      } h-[80px] w-full z-50 fixed flex items-center justify-between pr-14px pl-3 ${
        open ? 'pr-[270px]' : 'pr-[14px]'
      }`}
    >
      <div className={mode ? 'text-black' : 'text-white'}>
        <Button
          leftIcon={QueueListIcon}
          type="outline"
          mode={mode}
          className="outline-none border-0"
          onClick={handleToggle}
        />
      </div>
      <div className="flex gap-16 items-center">
        <div
          className={`flex gap-2 ${
            mode ? 'text-black dark:text-black' : 'text-white dark:text-white'
          }`}
        >
          <p className="font-sans cursor-pointer">UZB</p>
          <p className="font-sans cursor-pointer">ENG</p>
          <p className="font-sans cursor-pointer">RUS</p>
        </div>
        <div
          className={`flex items-center gap-3 ${
            mode ? 'text-black dark:text-black' : 'text-white dark:text-white'
          }`}
        >
          <p className="font-sans">Farrukhbek Mirzakulov</p>
          <div>
            <img src={usericon} alt="" className="h-[50px] cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
