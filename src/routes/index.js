
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';
import NotFound from '@/components/NotFound';


export default [
  // home
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home,
  },

  // dashboard
  {
    path: '/dash',
    component: Dashboard,
    children: [
      {
        path: 'graphsmaps',
        component: Home,
      },
      {
        path: 'managedata',
        component: NotFound,
      },
      {
        path: 'generateticket',
        component: Home,
      },
    ],
    beforeEnter: (to, from, next) => {
      next();
    },
  },

  // 404 page
  { path: '*', component: NotFound },
];
