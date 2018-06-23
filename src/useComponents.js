import forEach from './forEach'

export default function (Vue, components) {
  if (!components) return
  forEach(components, (component, id) => {
    Vue.component(id, component)
  })
}
