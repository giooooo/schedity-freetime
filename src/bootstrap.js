
import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import routes from './routes';

// Axios
Axios.defaults.baseURL = process.env.API;
Axios.defaults.headers.common.Accept = 'application/json';
Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      // handle Not Authenticated Error
    }
  });

Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});
// Vue router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
