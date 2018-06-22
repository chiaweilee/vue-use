import forEach from './forEach'

export default function (Vue, filter) {
  if (filter) {
    forEach(filter, (filter, id) => {
      if (typeof filter === 'function') Vue.filter(id, filter)
    })
  }
}
