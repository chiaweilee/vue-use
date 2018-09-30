import Vue from 'vue'

export default function (directives) {
  if (typeof directives !== 'object') return
  Object.keys(directives).forEach(d => {
    Vue.directive(d, directives[d])
  })
}
