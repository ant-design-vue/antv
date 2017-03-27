import './style/index.less'
import TooltipMixin from '../mixins/tooltip'

export default {
  name: 'VTooltip',

  mixins: [TooltipMixin],

  data() {
    return {
      prefixCls: 'ant-tooltip'
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
        return (<div class="ant-tooltip-inner">{ context.data.title }</div>)
      }
    }
  }
}
