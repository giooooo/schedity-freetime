
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';
import NotFound from '@/components/NotFound';


export default [
  // home
  {
    path: '/home',
    name: 'home',
    component: Home,
  },

  // dashboard
  {
    path: '/dash',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      next();
    },
  },

  // 404 page
  { path: '*', component: NotFound },
];
