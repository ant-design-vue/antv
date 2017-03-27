class Transition {
  constructor({ prefixCls }) {
    const cls = `${prefixCls}-`
    this.props = {
      'enter-active-class': `${cls}fade-enter ${cls}fade-enter-active`,
      'leave-active-class': `${cls}fade-leave ${cls}fade-leave-active`
    }
  }
}

export default Transition
