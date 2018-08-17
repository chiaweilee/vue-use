export default function (Vue, config) {
  if (!config) return
  // version control
  const version = Vue.version.split('.').map(v => Number(v))
  if (version[1] >= 5) {
    // ignoredElements 2.5.0
    if (!!config.ignoredElements && config.ignoredElements instanceof Array) Vue.config.ignoredElements = config.ignoredElements // default []
  }
  if (version[1] >= 4) {
    // warnHandler 2.4.0
    if (!!config.warnHandler && typeof config.warnHandler === 'function') Vue.config.warnHandler = config.warnHandler // default undefined
  }
  if (version[1] >= 2) {
    // performance 2.2.0
    Vue.config.performance = !!config.performance === true // default false
    // productionTip 2.2.0
    Vue.config.productionTip = !!config.productionTip === true // default false
    // errorHandler 2.2.0
    if (!!config.errorHandler && typeof config.errorHandler === 'function') Vue.config.errorHandler = config.errorHandler // default undefined
  }
  // silent
  Vue.config.silent = !!config.silent === true // default false
  // devtools
  Vue.config.devtools = config.devtools !== undefined ? !!config.devtools : process.env.NODE_ENV !== 'production' // default process.env.NODE_ENV !== 'production'
  // optionMergeStrategies
  if (!!config.optionMergeStrategies && typeof config.optionMergeStrategies === 'object') Vue.config.optionMergeStrategies = config.optionMergeStrategies // default {}
  // keyCode
  if (!!config.keyCodes && typeof config.keyCodes === 'object') Vue.config.keyCodes = config.keyCodes // default {}
}
