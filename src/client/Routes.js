import App from './App';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Admins from './pages/AdminsList';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

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
        ...Contact,
        path : '/reservar',
      },
      {
        ...AboutUs,
        path : '/nosotros',
      },
      {
        ...NotFound,
        path : '',
      },
    ]
  },
];