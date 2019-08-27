// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
Vue.use(Mint);
axios.defaults.withCredentials=false;
axios.defaults.baseURL = 'http://travel123.applinzi.com/'; 
Vue.config.productionTip = false
Vue.prototype.axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
