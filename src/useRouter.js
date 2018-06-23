export default function (Vue, _VueRouter, Store) {
  if (!_VueRouter) return
  const { VueRouter, routes, base, mode, beforeEach, afterEach } = _VueRouter
  Vue.use(VueRouter)
  const router = new VueRouter({
    base,
    mode,
    routes
  })
  if (!!afterEach && typeof afterEach === 'function') {
    router.beforeEach((to, from, next) => {
      beforeEach(to, from, next, Store)
    })
  }
  if (!!beforeEach && typeof beforeEach === 'function') {
    router.afterEach((to, from) => afterEach(to, from, Store))
  }
  return router
}
