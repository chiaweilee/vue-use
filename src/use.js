import forEach from './forEach'

export default function (Vue, plugins) {
  if (!!plugins && plugins instanceof Array) {
    forEach(plugins, (plugin) => {
      if (typeof plugin === 'object' && !!plugin.install) {
        Vue.use(plugin)
      } else if (plugin instanceof Array) {
        Vue.use.apply(Vue, plugin)
      }
    })
  }
}
