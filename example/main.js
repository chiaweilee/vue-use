import Vue from 'vue'
import use from '../src/index'
import { config, filters, components, directives, nextTick } from './config/vue'
import Vuex from './config/vuex'
import VueRouter from './config/vuerouter'
import App from './App.vue'

use(Vue, {
  config,
  filters,
  components,
  directives,
  nextTick,
  VueRouter,
  Vuex
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
