import forEach from './forEach'

export default function (Vue, directives) {
  if (!!directives && typeof directives === 'object') {
    forEach(directives, (directive, id) => {
      if (typeof directive === 'object') Vue.directive(id, directive)
    })
  }
}
