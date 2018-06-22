export default (collection, iteratee) => {
  return Array.isArray(collection) ? collection.forEach(iteratee) : !(function (collection, iteratee) {
    for (let index in collection) {
      if (collection.hasOwnProperty(index)) iteratee(collection[index], index)
    }
  })(collection, iteratee)
}
