export default {
  silent: false,
  optionMergeStrategies: {},
  devtools: process.env.NODE_ENV !== 'production',
  errorHandler: undefined, // function (err, vm, info) // 2.2.0+
  warnHandler: undefined, // function (msg, vm, trace) // 2.4.0+
  ignoredElements: [], // 2.5.0+
  keyCodes: {},
  performance: false, // 2.2.0+
  productionTip: false // 2.2.0+
}
