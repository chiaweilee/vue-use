export default function (Vue, nextTick) {
  if (!!nextTick && typeof nextTick === 'function') {
    Vue.nextTick(nextTick)
  }
}
