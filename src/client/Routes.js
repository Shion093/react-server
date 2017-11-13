import App from './App';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Home from './pages/Home/index';
import Admins from './pages/AdminsList';

export default [
  {
    ...App,
    routes : [
      {
        ...Home,
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