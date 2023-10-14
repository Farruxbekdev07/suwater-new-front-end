import paths from 'constants/routePaths';
import { FC } from 'react';
import {
  UserIcon,
  HomeIcon,
  PencilIcon,
  PencilSquareIcon,
  KeyIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Users from 'app/pages/Users';
import Main from 'app/pages/Main';
import Appeals from 'app/pages/Appeals';
import Services from 'app/pages/Services';
import Messages from 'app/pages/Messages';
import Settings from 'app/pages/Settings';
import Sign__up from 'app/pages/Sign__up';
import CreateUser from 'app/pages/Users/pages/Create';
import CreateService from 'app/pages/Services/pages/Create';
import SendMessage from 'app/pages/Messages/pages/Create';
import Sign__In from 'app/pages/Sign__in';

interface IRoute {
  path: string;
  element: FC | any;
}

interface ISidebarRoutes extends IRoute {
  icon: FC | any;
  label: string;
}

export const AUTH_ROUTES: IRoute[] = [
  {
    path: paths.SIGNUP,
    element: Sign__up,
  },
  {
    path: paths.SIGNIN,
    element: Sign__In,
  },
];

export const SIDEBAR_ROUTES: ISidebarRoutes[] = [
  {
    path: paths.MAIN,
    element: Main,
    icon: HomeIcon,
    label: 'Asosiy sahifa',
  },
  {
    path: paths.USERS,
    element: Users,
    icon: UserIcon,
    label: 'Foydalanuvchilar',
  },
  {
    path: paths.APPEALS,
    element: Appeals,
    icon: PencilIcon,
    label: 'Murojatlar',
  },
  {
    path: paths.SERVICES,
    element: Services,
    icon: KeyIcon,
    label: 'Xizmatlar',
  },
  {
    path: paths.MESSAGES,
    element: Messages,
    icon: PencilSquareIcon,
    label: 'Xabarlar',
  },
  {
    path: paths.SETTINGS,
    element: Settings,
    icon: AdjustmentsHorizontalIcon,
    label: 'Sozlamalar',
  },
];

export const MAIN_ROUTES: IRoute[] = [
  {
    path: '/',
    element: Main,
  },
  {
    path: paths.ADD__USER,
    element: CreateUser,
  },
  {
    path: paths.ADD__SERVICE,
    element: CreateService,
  },
  {
    path: paths.SEND__MESSAGES,
    element: SendMessage,
  },
  {
    path: paths.MAIN,
    element: Main,
  },
  {
    path: paths.USERS,
    element: Users,
  },
  {
    path: paths.APPEALS,
    element: Appeals,
  },
  {
    path: paths.SERVICES,
    element: Services,
  },
  {
    path: paths.MESSAGES,
    element: Messages,
  },
  {
    path: paths.SETTINGS,
    element: Settings,
  },
];
