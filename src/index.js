import './globals'
import 'Styles/main.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
  store
});
