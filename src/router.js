import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter);
import Home from './components/Home.vue';
import About from './components/About.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import Profile from './views/Profile.vue';
import EventsPage from './views/EventsPage.vue'
import ErrorPage from './views/Error404.vue'
import Footer from './components/Footer.vue'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/allevents', component: EventsPage },
    { path: '*', component: ErrorPage },
    { path: '/footer', component: Footer }
  ]
});
router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/allevents' ) {
    if (!store.state.accessToken) {
      next('/signin');
    }
  }
  if (to.fullPath === '/signin') {
    if (store.state.accessToken) {
      next('/');
    }
  }
  if (to.fullPath === '/signup') {
    if (store.state.accessToken) {
      next('/');
    }
  }
  if (to.fullPath === '/profile') {
    if (!store.state.accessToken) {
      next('/signin');
    }
  }
  next();
});

export default router;