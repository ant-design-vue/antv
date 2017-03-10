import Collapse from './collapse'
import SideUp from './slide-up'
import ZoomBigFast from './zoom-big-fast'

export default {
  name: 'VTransition',
  functional: true,
  render(createElement, context) {
    const type = context.data.attrs.type
    let data
    switch (type) {
      case 'collapse':
        data = new Collapse()
        break
      case 'slide-up':
        data = new SideUp()
        break
      case 'zoom-big-fast':
        data = new ZoomBigFast()
        break
      default:
    }
    return createElement('transition', data, context.children)
  }
}
