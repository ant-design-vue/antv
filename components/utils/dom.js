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
}

export default Dom
