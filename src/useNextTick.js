import Vue from 'vue'

export default function (nextTick) {
  if (typeof nextTick !== 'function') return
  Vue.nextTick(nextTick)
}
