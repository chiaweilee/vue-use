import forEach from './forEach'

export default function (Vue, plugins) {
  if (!!plugins && typeof plugins === 'object') {
    forEach(plugins, (plugin) => {
      if (typeof plugin === 'object' && !!plugin.install) {
        Vue.use(plugin)
      }
    })
  }
}
