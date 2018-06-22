import forEach from './forEach'

export default function (Vue, filters) {
  if (!!filters && typeof filters === 'object') {
    forEach(filters, (filter, id) => {
      if (typeof filter === 'function') Vue.filter(id, filter)
    })
  }
}
