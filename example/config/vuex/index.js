import Vuex from 'vuex'
import modules from './modules'
import plugins from './plugins'

export default {
  Vuex,
  Store: {modules, strict: process.env.NODE_ENV !== 'production', plugins}
}
