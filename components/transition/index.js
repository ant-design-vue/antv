import Collapse from './collapse'
import SideUp from './slide-up'
import ZoomBigFast from './zoom-big-fast'

export default {
  name: 'VTransition',
  functional: true,
  render(createElement, context) {
    const attrs = context.data.attrs
    const type = attrs.type
    let data
    switch (type) {
      case 'collapse':
        data = new Collapse(attrs)
        break
      case 'slide-up':
        data = new SideUp(attrs)
        break
      case 'zoom-big-fast':
        data = new ZoomBigFast(attrs)
        break
      default:
    }
    return createElement('transition', data, context.children)
  }
}
