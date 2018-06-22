import forEach from './forEach'

export default function (Vue, components) {
  if (!!components && typeof components === 'object') {
    forEach(components, (component, id) => {
      if (typeof component === 'object' || typeof component === 'function') Vue.component(id, component)
    })
  }
}
