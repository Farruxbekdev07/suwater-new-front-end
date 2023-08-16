const userDataId = JSON.parse(localStorage.getItem('data') || '{}');

const paths = {
  //  ROUTES
  MAIN: '/',

  USERS: '/users',
  ADD__USER: '/users/add-user',

  APPEALS: '/appeals',

  SERVICES: '/services',
  ADD__SERVICE: '/services/add-service',

  MESSAGES: '/messages',
  SEND__MESSAGES: '/messages/send-message',

  SETTINGS: '/settings',

  // AUTH PATHS
  SIGNUP: '/sign-up',
  SIGNIN: '/sign-in',
};

export default paths;
