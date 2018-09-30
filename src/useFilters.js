import Vue from 'vue'

export default function (filters) {
  if (typeof filters !== 'object') return
  Object.keys(filters).forEach(f => {
    Vue.filter(f, filters[f])
  })
}
