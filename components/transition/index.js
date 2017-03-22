import Collapse from './collapse'
import SideUp from './slide-up'
import ZoomBigFast from './zoom-big-fast'
import MoveUp from './move-up'
import Fade from './fade'
import Zoom from './zoom'

export default {
  name: 'VTransition',
  functional: true,
  render(createElement, context) {
    const attrs = context.data.attrs
    const type = attrs.type
    let data = {}
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
      case 'move-up':
        data = new MoveUp(attrs)
        break
      case 'fade':
        data = new Fade(attrs)
        break
      case 'zoom':
        data = new Zoom(attrs)
        break
      default:
    }
    data = Object.assign({}, context.data, data)
    return createElement('transition', data, context.children)
  }
}
