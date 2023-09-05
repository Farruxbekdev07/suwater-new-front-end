import React, { useEffect, useState } from 'react';
import { QueueListIcon } from '@heroicons/react/24/outline';
import Button from 'UI/Button';
import usericon from 'media/images/user-icon2.png';
import { GetUserData } from 'app/pages/Storage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header({ mode, open, setOpenSidebar }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<any[]>([]);
  const [userData, setUserData] = useState<any[]>([]);
  const userId = JSON.parse(localStorage.getItem('data') || '{}');
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const handleToggle = () => {
    if (open) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  useEffect(() => {
    async function get() {
      const data = await GetUserData(navigate);
      console.log(data);
      setUserData([data]);
    }
    get();
  }, []);

  return (
    <header
      className={`${
        mode ? 'bg-white shadow-xl' : 'bg-gray-900 shadow-gray-700 shadow-xl'
      } h-[80px] w-full z-50 fixed flex items-center justify-between ${
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
        <div className={`flex gap-2 ${mode ? 'text-black' : 'text-white'}`}>
          <p
            className="font-sans cursor-pointer"
            onClick={() => changeLanguage('uz')}
          >
            UZB
          </p>
          <p
            className="font-sans cursor-pointer"
            onClick={() => changeLanguage('en')}
          >
            ENG
          </p>
          <p
            className="font-sans cursor-pointer"
            onClick={() => changeLanguage('ru')}
          >
            RUS
          </p>
        </div>
        <div
          className={`flex items-center gap-3 ${
            mode ? 'text-black' : 'text-white'
          }`}
        >
          {userData?.map(item => {
            return (
              <p className="font-sans">
                {item?.name} {item?.last_name}
              </p>
            );
          })}
          <div>
            <img src={usericon} alt="" className="h-[50px] cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
