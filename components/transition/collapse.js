class Transition {
  constructor() {
    this.props = {
      'enter-active-class': 'ant-motion-collapse ant-motion-collapse-active',
      'leave-active-class': 'ant-motion-collapse ant-motion-collapse-active'
    }
    this.on = {
      beforeEnter(el) {
        // 获取隐藏的元素的高度
        // const oldStyle = {
        //   visibility: el.style.visibility,
        //   position: el.style.position,
        //   display: el.style.display
        // }
        // el.style.visibility = 'hidden'
        // el.style.position = 'absolute'
        // el.style.display = ''
        // el.dataset.offsetHeight = el.offsetHeight
        // Object.keys(oldStyle).forEach((key) => {
        //   el.style[key] = oldStyle[key]
        // })
        el.style.height = '0px'
      },
      enter(el) {
        el.style.display = ''
        el.style.height = `${el.scrollHeight}px`
      },
      afterEnter(el) {
        el.style.display = ''
        el.style.height = ''
      },
      beforeLeave(el) {
        el.style.height = `${el.offsetHeight}px`
      },
      leave(el) {
        // todo: 为什么一定要setTimeout呢···
        // setTimeout(() => {
        //   el.style.height = '0px'
        // }, 0)
        // todo: 一个奇怪的现象，必须要调用一次el的属性，否则没有过渡效果，不知道是否有兼容问题
        let h = el.scrollHeight
        h = '0px'
        el.style.height = h
      },
      afterLeave(el) {
        el.style.height = ''
      }
    }
  }
}

export default Transition
