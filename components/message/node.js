export default {
  name: 'VNode',

  props: {
    index: String,
    content: String,
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
      setTimeout(() => {
        this.$parent.remove(this.index)
        if (this.onClose) {
          this.$nextTick(() => {
            this.onClose.call(this, this.index)
          })
        }
      }, this.duration * 1000)
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
