import useFilters from './useFilters'
import useComponents from './useComponents'

const use = (Vue, options) => {
  useFilters(Vue, options.filters)
  useComponents(Vue, options.components)
}

export default use
