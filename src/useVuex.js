export default function (Vue, _Vuex) {
  if (!_Vuex) return
  const {Vuex, Store} = _Vuex
  if (!!Vuex.Store && !!Vuex.install) {
    Vue.use(Vuex)
  }
  if (!!Store && typeof Store === 'object') {
    return new Vuex.Store(Store)
  }
}
