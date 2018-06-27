import use from './use'
import useConfig from './useConfig'
import useFilters from './useFilters'
import useComponents from './useComponents'
import useDirectives from './useDirectives'
import useNextTick from './useNextTick'
import useVuex from './useVuex'
import useRouter from './useRouter'

export default (Vue, options) => {
  useConfig(Vue, options.config)
  useFilters(Vue, options.filters)
  useComponents(Vue, options.components)
  useDirectives(Vue, options.directives)
  useNextTick(Vue, options.nextTick)
  const Store = useVuex(Vue, options.Vuex)
  const Router = useRouter(Vue, options.VueRouter, Store)
  use(Vue, options.use, {Store, Router})
  return {
    store: Store,
    router: Router
  }
}

export {
  useConfig,
  useFilters,
  useComponents,
  useDirectives,
  useNextTick
}
