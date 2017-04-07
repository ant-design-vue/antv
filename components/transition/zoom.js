class Transition {
  constructor({ prefixCls }) {
    const cls = prefixCls ? `${prefixCls}-` : ''
    this.props = {
      'enter-active-class': `${cls}zoom-enter ${cls}zoom-enter-active`,
      'leave-active-class': `${cls}zoom-leave ${cls}zoom-leave-active`
    }
  }
}

export default Transition
