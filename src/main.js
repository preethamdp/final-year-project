import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import moment from 'moment'
Vue.prototype.moment = moment



// import VueSocketio from 'vue-socket.io';
// Vue.use(new VueSocketio({
//   debug: true,
//   connection: 'http://192.168.43.148:4443',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
// }))
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
