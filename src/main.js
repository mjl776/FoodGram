import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase/app'
Vue.config.productionTip = false
Vue.use(VueRouter);

let app = null;

// wait for firebase auth to initialize before creating the app
firebase.auth().onAuthStateChanged(() => {

    // initialize if it is not created already 
    if(!app) {
      app = new Vue({
        render: h => h(App),
        router: router
        }).$mount('#app')
  }
})

const router = new VueRouter({
  routes: Routes
});

// creates axios availible globally so it does not have to be imported everytime
Vue.prototype.$http = axios;

// Event Bus
export const EventBus = new Vue();

