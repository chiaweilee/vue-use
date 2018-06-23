export default function (Vue, nextTick) {
  if (!nextTick) return
  Vue.nextTick(nextTick)
}
