import './style/index.less'
import TooltipMixin from '../mixins/tooltip'

export default {
  name: 'VPopover',

  mixins: [TooltipMixin],

  props: {
    content: [String, Object]
  },

  data() {
    return {
      prefixCls: 'ant-popover'
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
              <div class="ant-popover-title">{ data.title || data.$slots.title}</div>
              <div class="ant-popover-inner-content">{ data.content || data.$slots.content}</div>
            </div>
          </div>)
      }
    }
  }
}
