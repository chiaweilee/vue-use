import VueRouter from 'vue-router'
import routes from './routes'

export default {
  VueRouter,
  base: process.env.NODE_ENV === 'production' ? __dirname : '/dist/',
  mode: process.env.NODE_ENV === 'production' ? 'history' : undefined,
  routes,
  beforeEach: function (to, from, next /* , store */) {},
  afterEach: function (to, from /* , store */) {}
}
