export default {
  name: 'VTabPane',

  props: {
    index: String,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    tab: [String, Object]
  },
  data() {
    return {
      store: this.$parent.store
    }
  },
  render() {
    const activeIndex = this.store.state.activeIndex
    const data = {
      class: {
        'ant-tabs-tabpane-active': activeIndex === this.index,
        'ant-tabs-tabpane-inactive': activeIndex !== this.index
      }
    }
    return (<div role="tabpanel" aria-hidden="false"
                 class="ant-tabs-tabpane" {...data}>{this.$slots.default}</div>)
  }
}
