import Vue from 'vue'
import Vuex from 'vuex'

export default function (store) {
  if (typeof store !== 'object') return
  Vue.use(Vuex)
  return new Vuex.Store(store)
}
