import forEach from './forEach'

export default function (Vue, plugins) {
  if (!plugins) return
  forEach(plugins, (plugin) => {
    if (typeof plugin === 'object' && !!plugin.install) {
      Vue.use(plugin)
    } else if (Array.isArray(plugin)) {
      Vue.use.apply(Vue, plugin)
    }
  })
}
