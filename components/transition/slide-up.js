class Transition {
  constructor({ prefixCls }) {
    const cls = prefixCls ? `${prefixCls}-` : ''
    this.props = {
      'enter-active-class': `${cls}slide-up-enter ${cls}slide-up-enter-active`,
      'leave-active-class': `${cls}slide-up-leave ${cls}slide-up-leave-active`
    }
  }
}

export default Transition
