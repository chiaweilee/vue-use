import Vue from 'vue'
import VueRouter from 'vue-router'

export default function (router, Store) {
  if (typeof router !== 'object') return
  const { routes, base, mode, beforeEach, afterEach } = router
  Vue.use(VueRouter)
  const Router = new VueRouter({
    base,
    mode,
    routes
  })
  if (typeof afterEach === 'function') {
    Router.beforeEach((to, from, next) => {
      beforeEach(to, from, next, Store)
    })
  }
  if (typeof beforeEach === 'function') {
    Router.afterEach((to, from) => afterEach(to, from, Store))
  }
  return Router
}
