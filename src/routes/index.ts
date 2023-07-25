import { HomePage } from 'app/pages/HomePage';
import paths from 'constants/routePaths';
import { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface IRoute {
  path: string;
  element: FC | any;
}

interface ISidebarRoutes extends IRoute {
  icon: FC | any;
  label: string;
}

export const AUTH_ROUTES: IRoute[] = [];

export const SIDEBAR_ROUTES: ISidebarRoutes[] = [
  {
    path: paths.USERS,
    element: HomePage,
    icon: UserCircleIcon,
    label: 'Users',
  },
];

export const MAIN_ROUTES: IRoute[] = [];
