import modules from './modules'
import plugins from './plugins'

export default {modules, strict: process.env.NODE_ENV !== 'production', plugins}
