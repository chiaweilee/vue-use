import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

// import use from '../lib/index'
import use from '../src/index'

import config from './config/vue/config'
import components from './config/vue/components'
import filters from './config/vue/filters'
import directives from './config/vue/directives'
import nextTick from './config/vue/nextTick'

use(Vue, {
  config,
  filters,
  components,
  directives,
  nextTick,
  use: [
    [Vuex, {}]
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
