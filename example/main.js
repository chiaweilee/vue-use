import Vue from 'vue'
import use from '../src/index'
import { config, filters, components, directives, nextTick } from './config/vue'
import Store from './config/store'
import Router from './config/router'

const { router, store } = use({
  config,
  filters,
  components,
  directives,
  nextTick,
  router: Router,
  store: Store,
  use: use => {
    console.log(use)
  }
})

console.log(router)
console.log(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>'
})
