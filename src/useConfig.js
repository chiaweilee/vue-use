import Vue from 'vue'

export default function (config) {
  if (typeof config !== 'object') return
  Object.keys(config).forEach(c => {
    Vue.config['c'] = config[c]
  })
}
