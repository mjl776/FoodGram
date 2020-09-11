import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

// creates axios availible globally so it does not have to be imported everytime
Vue.prototype.$http = axios;

// Event Bus
export const EventBus = new Vue();

new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')
