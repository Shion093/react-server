import App from './App';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Users2 from './pages/UsersList';
import Admins from './pages/AdminsList';

export default [
  {
    ...App,
    routes : [
      {
        ...Users2,
        path  : '/',
        exact : true,
      },
      {
        ...Users,
        path : '/users',
      },
      {
        ...Admins,
        path : '/admins',
      },
      {
        ...NotFound,
        path : '',
      },
    ]
  },
];