import Vue from 'vue'
import App from './App.vue'
import use from '../src/index'
import components from './config/components'
import filters from './config/filters'

Vue.config.productionTip = false

use(Vue, {
  filters,
  components
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
