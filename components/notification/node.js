export default {
  name: 'VNode',

  props: {
    index: String,
    icon: [String, Object],
    message: [String, Object],
    description: String,
    duration: Number,
    type: {
      type: String,
      default: 'info'
    },
    onClose: Function
  },

  render() {
    return (<v-transition type="fade" prefixCls="ant-notification">
      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class={ { 'ant-notification-notice-with-icon': !!this.icon } }>
            {this.icon ? <span class="ant-notification-notice-icon">{this.icon}</span> : null}
            <div class="ant-notification-notice-message">{ this.message }</div>
            <div class="ant-notification-notice-description">{ this.description }</div>
          </div>
        </div>
        <a tabindex="0" class="ant-notification-notice-close" onClick={ this.close }><span
          class="ant-notification-notice-close-x"></span></a>
      </div>
    </v-transition>)
  },

  mounted() {
    if (this.duration) {
      this.closeTimer = setTimeout(this.close, this.duration)
    }
  },

  computed: {
    iconCls() {
      debugger
      return {
        'ant-notification-notice-with-icon': !!this.icon
      }
    }
  },

  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },

    close() {
      this.clearCloseTimer()
      this.$parent.remove(this.index)
      if (this.onClose) {
        this.$nextTick(() => {
          this.onClose.call(this, this.index)
        })
      }
    }
  }
}
