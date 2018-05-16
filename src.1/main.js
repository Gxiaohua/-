// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//安装了vuex vue-router axios vivew
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import $ from 'jquery'
// import axios from 'axios'
import '@/assets/css/app.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
// import '@/assets/css/home.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
