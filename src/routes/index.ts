import paths from 'constants/routePaths';
import { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Users from 'app/pages/Users';

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
    element: Users,
    icon: UserCircleIcon,
    label: 'Users',
  },
];

export const MAIN_ROUTES: IRoute[] = [];
