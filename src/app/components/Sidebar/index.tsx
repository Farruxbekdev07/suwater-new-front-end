import React from 'react';
import { useTranslation } from 'react-i18next';
import { SIDEBAR_ROUTES } from 'routes';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 max-[640px]:w-20 h-screen"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            {SIDEBAR_ROUTES.map(item => {
              const { icon: Icon, path, label } = item;
              return (
                <li key={path} onClick={() => navigate(path)}>
                  <NavLink
                    to={path}
                    className={`flex items-center max-[640px]:justify-center p-2 ${
                      location.pathname === path
                        ? 'text-blue-700'
                        : 'text-gray-950 dark:text-gray-50'
                    } rounded-lg ${
                      location.pathname === path
                        ? 'bg-blue-100'
                        : 'bg-transparent hover:bg-blue-100 dark:hover:bg-transparent'
                    } group gap-2`}
                  >
                    <Icon
                      className={`w-6 h-6 font-medium ${
                        location.pathname === path
                          ? 'text-blue-700'
                          : 'text-gray-950 dark:text-gray-50'
                      } transition duration-75`}
                    />
                    <span className="max-[640px]:hidden">{t(label)}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
