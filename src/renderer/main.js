import Vue from 'vue'
import { store } from './store/store.js';
import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

<<<<<<< HEAD
Vue.prototype.$eventHub = new Vue(); // Global event bus
=======
Vue.prototype.$eventHub = new Vue();
>>>>>>> a0845a392c5f7b6c41dfcddaa8a2fe189e585d05

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
