class Transition {
  constructor({ prefixCls }) {
    const cls = `${prefixCls}-`
    this.props = {
      'enter-active-class': 'slide-up-enter slide-up-enter-active',
      'leave-active-class': `${cls}slide-up-leave ${cls}slide-up-leave-active`
    }
  }
}

export default Transition
