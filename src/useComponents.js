import Vue from 'vue'

export default function (components) {
  if (typeof components !== 'object') return
  Object.keys(components).forEach(c => {
    Vue.component(c, components[c])
  })
}
