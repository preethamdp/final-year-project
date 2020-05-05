import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter);
import Home from './components/Home.vue';
import About from './components/About.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: About },
    { path: '/about', component: Home },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
});
router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/users') {
    if (!store.state.accessToken) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      next('/users');
    }
  }
  next();
});

export default router;