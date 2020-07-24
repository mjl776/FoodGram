import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.config.productionTip = false

// creates axios globally so it does not have to be imported everytime
Vue.protype.$http = 'axios'; 

// Event Bus
export const EventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
