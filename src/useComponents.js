import forEach from './forEach'

export default function (Vue, component) {
  if (component) {
    forEach(component, (component, id) => {
      if (typeof component === 'object' && !!component.render) Vue.component(id, component)
    })
  }
}
