import React from 'react';
import { useTranslation } from 'react-i18next';
import { SIDEBAR_ROUTES } from 'routes';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from 'UI/Button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import suwater from 'media/images/suwater-svg.png';

const Sidebar = ({ mode, changeMode, open }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  if (open === false) return null;

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-30 w-64 max-[640px]:w-20 h-screen"
      >
        <div
          className={`h-full px-3 pb-4 overflow-hidden flex flex-col justify-between ${
            mode === true ? 'bg-gray-200' : 'bg-gray-800 text-black'
          }`}
        >
          <ul className="space-y-2">
            <div className="h-[80px] bg-transparent flex items-center justify-between px-4">
              <p
                className={`text-[26px] font-bold font-sans italic ${
                  mode ? 'text-blue-700' : 'text-white'
                }`}
              >
                SuWater
              </p>
              <img className="h-[40px]" src={suwater} alt="suwater" />
            </div>
            {SIDEBAR_ROUTES.map(item => {
              const { icon: Icon, path, label } = item;
              return (
                <li key={path} onClick={() => navigate(path)}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? `text-white border border-[transparent] bg-blue-700 flex items-center max-[640px]:justify-center p-2 rounded-xl`
                        : `flex items-center max-[640px]:justify-center p-2 text-black ${
                            mode ? 'text-black' : 'text-white'
                          }`
                    }
                    // className={({isActive}) => isActive ? 'active' : ''}
                  >
                    <Icon className={`w-6 h-6 font-medium mr-2`} />
                    <span className="max-[640px]:hidden">{t(label)}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div>
            <Button
              type="outline"
              onClick={() => navigate('/sign-up')}
              mode={mode}
            >
              Sign
            </Button>
            <Button
              type="outline"
              leftIcon={mode === true ? MoonIcon : SunIcon}
              onClick={() => changeMode(!mode)}
              mode={mode}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
