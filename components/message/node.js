export default {
  name: 'VNode',

  props: {
    index: '',
    content: '',
    duration: Number,
    type: {
      type: String,
      default: 'info'
    },
    onClose: Function
  },

  render() {
    return (<v-transition type="move-up">
      <div class="ant-message-notice">
        <div class="ant-message-notice-content">
          <div class="ant-message-custom-content" {...{ class: [`ant-message-${this.type}`] }}>
            <i class="anticon" {...{ class: this.iconCls }}></i>
            <span>{ this.content }</span>
          </div>
        </div>
      </div>
    </v-transition>)
  },

  mounted() {
    if (this.duration) {
      // 因为vue缓存组件，删除函数使用闭包，避免引用错误
      setTimeout((({ index, onClose }) => (() => {
        this.$parent.remove(index)
        if (onClose) {
          this.$nextTick(() => {
            onClose.call(this.$parent, index)
          })
        }
      }))(this), this.duration)
    }
  },

  computed: {
    iconCls() {
      const icon = {
        info: 'info',
        success: 'check',
        warning: 'exclamation',
        error: 'cross'
      }[this.type]
      return {
        [`anticon-${icon}-circle`]: !!icon,
        'anticon-spin anticon-loading': this.type === 'loading'
      }
    }
  }
}
