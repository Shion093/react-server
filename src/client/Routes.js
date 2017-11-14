import App from './App';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
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
        ...Gallery,
        path : '/galeria',
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