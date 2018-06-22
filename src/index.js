import use from './use'
import useConfig from './useConfig'
import useFilters from './useFilters'
import useComponents from './useComponents'
import useDirectives from './useDirectives'
import useNextTick from './useNextTick'

export default (Vue, options) => {
  use(Vue, options.use)
  useConfig(Vue, options.config)
  useFilters(Vue, options.filters)
  useComponents(Vue, options.components)
  useDirectives(Vue, options.directives)
  useNextTick(Vue, options.nextTick)
}

export {
  use,
  useConfig,
  useFilters,
  useComponents,
  useDirectives,
  useNextTick
}
