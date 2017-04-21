import '../popover/style/index.less'
import '../button/style/index.less'

import TooltipMixin from '../mixins/tooltip'

export default {
  name: 'VPopconfirm',

  mixins: [TooltipMixin],

  props: {
    okText: {
      type: String,
      default: 'Yes'
    },
    cancelText: {
      type: String,
      default: 'No'
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },

  data() {
    return {
      prefixCls: 'ant-popover'
    }
  },

  methods: {
    onConfirm(e) {
      this.closePopper()
      this.$emit('onConfirm', e)
    },

    onCancel(e) {
      this.closePopper()
      this.$emit('onCancel', e)
    }
  },

  components: {
    /**
     * 定义函数化组件用于插入到popperVM
     * 实际浮层显示的内容
     */
    VTooltipContent: {
      functional: true,

      render(h, context) {
        const data = context.data
        return (
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <i class="anticon anticon-exclamation-circle"></i>
                  <div class="ant-popover-message-title">{ data.title || data.$slots.title}</div>
                </div>
                <div class="ant-popover-buttons">
                  <v-button type="button" class="ant-btn ant-btn-sm"
                            nativeOnClick={ data.onCancel }>
                    <span>{ data.cancelText }</span>
                  </v-button>
                  <v-button type="button" class="ant-btn ant-btn-primary ant-btn-sm"
                            nativeOnClick={ data.onConfirm }>
                    <span>{ data.okText }</span>
                  </v-button>
                </div>
              </div>
            </div>
          </div>)
      }
    }
  }
}
