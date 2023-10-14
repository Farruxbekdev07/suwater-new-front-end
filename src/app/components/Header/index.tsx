import React, { useEffect, useState } from 'react';
import { QueueListIcon } from '@heroicons/react/24/outline';
import Button from 'UI/Button';
import usericon from 'media/images/user-icon2.png';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { GET__USER_ID } from './api';
import Dropdown from '../Dropdown';
import { language } from 'store/reducer';

function Header({ mode, open, setOpenSidebar }) {
  const [getUser, { data }] = useLazyQuery(GET__USER_ID);
  const [userData, setUserData] = useState<any>({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation('translation');
  const userId = useSelector(
    (state: RootStateOrAny) => state?.auth?.userId?.id,
  );

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    dispatch(language(lang));
  };

  const handleToggle = () => {
    if (open) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  useEffect(() => {
    getUser({
      variables: {
        ID: userId,
      },
    });
    setUserData(data?.getUser?.payload);
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
      <div className="flex gap-10 items-center">
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
          <p className="font-sans">
            {userData?.firstName} {userData?.lastName}
          </p>
          <div className="relative ">
            <img
              src={usericon}
              alt=""
              className="h-[50px] cursor-pointer"
              onClick={() => setShow(!show)}
            />
            <Dropdown show={show} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
