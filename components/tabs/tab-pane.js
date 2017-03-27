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
    const data = {
      class: {
        'ant-tabs-tabpane-active': this.store.state.activeIndex === this.index,
        'ant-tabs-tabpane-inactive': this.store.state.activeIndex !== this.index
      }
    }
    return (<div role="tabpanel" aria-hidden="false"
                 class="ant-tabs-tabpane" {...data}>{this.$slots.default}</div>)
  }
}
