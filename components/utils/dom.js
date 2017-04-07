let cached

class Dom {
  /**
   * 获取元素的offset:{top, left}
   * @param elem
   * @returns {{top: number, left: number}}
   */
  static getOffset(elem) {
    if (!elem.getClientRects().length) return { top: 0, left: 0 }

    const rect = elem.getBoundingClientRect()
    const doc = elem.ownerDocument
    const docElem = doc.documentElement
    const win = doc.defaultView

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    }
  }

  /**
   * 设置transform，浏览器兼容处理
   * @param style
   * @param v
   */
  static setTransform(style, v) {
    style.transform = v
    style.webkitTransform = v
    style.mozTransform = v
  }

  static setTransformOrigin(node, value) {
    const style = node.style
    const list = ['Webkit', 'Moz', 'Ms', 'ms']
    list.forEach((prefix) => {
      style[`${prefix}TransformOrigin`] = value
    })
    style.transformOrigin = value
  }

  static getScrollBarSize(fresh) {
    if (fresh || cached === undefined) {
      const inner = document.createElement('div')
      inner.style.width = '100%'
      inner.style.height = '200px'

      const outer = document.createElement('div')
      const outerStyle = outer.style

      outerStyle.position = 'absolute'
      outerStyle.top = 0
      outerStyle.left = 0
      outerStyle.pointerEvents = 'none'
      outerStyle.visibility = 'hidden'
      outerStyle.width = '200px'
      outerStyle.height = '150px'
      outerStyle.overflow = 'hidden'

      outer.appendChild(inner)

      document.body.appendChild(outer)

      const widthContained = inner.offsetWidth
      outer.style.overflow = 'scroll'
      let widthScroll = inner.offsetWidth

      if (widthContained === widthScroll) {
        widthScroll = outer.clientWidth
      }

      document.body.removeChild(outer)

      cached = widthContained - widthScroll
    }
    return cached
  }
}

export default Dom
