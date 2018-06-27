import forEach from './forEach'

export default function (Vue, plugins, {Store, Router}) {
  if (!plugins) return
  if (typeof plugins === 'function') plugins = plugins({store: Store, router: Router})
  forEach(plugins, (plugin) => {
    if (typeof plugin === 'object' && !!plugin.install) {
      Vue.use(plugin)
    } else if (Array.isArray(plugin)) {
      Vue.use.apply(Vue, plugin)
    }
  })
}
