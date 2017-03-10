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
    VTooltipContent: {
      functional: true,

      render(h, context) {
        return (<div class={ [`${context.data.prefixCls}-inner`] }>{ context.data.title }</div>)
      }
    }
  }
}
