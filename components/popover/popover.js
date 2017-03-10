import './style/index.less'
import TooltipMixin from '../mixins/tooltip'

export default {
  name: 'VPopover',

  mixins: [TooltipMixin],

  props: {
    content: String
  },

  data() {
    return {
      prefixCls: 'ant-popover'
    }
  },

  components: {
    VTooltipContent: {
      functional: true,

      render(h, context) {
        const data = context.data
        return (
          <div class={ [`${data.prefixCls}-inner`] }>
            <div>
              <div class="ant-popover-title">{ data.title || data.$slots.title}</div>
              <div class="ant-popover-inner-content">{ data.content || data.$slots.content}</div>
            </div>
          </div>)
      }
    }
  }
}
