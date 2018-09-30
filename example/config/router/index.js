import routes from './routes'

export default {
  base: process.env.NODE_ENV === 'production' ? __dirname : '/dist/',
  mode: process.env.NODE_ENV === 'production' ? 'history' : undefined,
  routes,
  beforeEach: function (to, from, next /* , store */) {},
  afterEach: function (to, from /* , store */) {}
}
