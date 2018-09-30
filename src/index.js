import Vue from 'vue'
import useConfig from './useConfig'
import useFilters from './useFilters'
import useComponents from './useComponents'
import useDirectives from './useDirectives'
import useNextTick from './useNextTick'
import useVuex from './useVuex'
import useRouter from './useRouter'

export default ({ config, filters, components, directives, nextTick, store, router, use }) => {
  useConfig(config)
  useFilters(filters)
  useComponents(components)
  useDirectives(directives)
  useNextTick(nextTick)
  if (typeof use === 'function') use.call(Vue, Vue.use)
  const Store = useVuex(store)
  const Router = useRouter(router, Store)
  return {
    store: Store,
    router: Router
  }
}
