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
      default: 'open'
    },
    onClose: Function
  },

  render() {
    return (<v-transition type="fade" prefixCls="ant-notification">
      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class={ { 'ant-notification-notice-with-icon': !!this.vicon } }>
            {this.vicon ? <span class="ant-notification-notice-icon">{this.vicon}</span> : null}
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
      this.closeTimer = setTimeout(this.close, this.duration * 1000)
    }
  },

  computed: {
    vicon() {
      if (this.icon) return this.icon
      return this.type !== 'open' ? (<i class="anticon" {...{ class: this.iconCls }}></i>) : ''
    },

    iconCls() {
      const icon = {
        info: 'info',
        success: 'check',
        warning: 'exclamation',
        error: 'cross'
      }[this.type]
      return {
        [`anticon-${icon}-circle-o ant-notification-notice-icon ant-notification-notice-icon-${this.type}`]: !!icon,
        'anticon-spin anticon-loading': this.type === 'loading'
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
