import VTabNav from './tab-nav'
import Store from './store'

export default {
  name: 'VTabs',

  props: {
    value: String,
    type: {
      type: String,
      default: 'line'
    },
    size: String,
    hideAdd: Boolean,
    tabBarExtraContent: null
  },

  data() {
    const store = new Store(this, { activeIndex: this.value, injected: true, ...this.$props })
    return {
      store
    }
  },

  watch: {
    value() {
      this.store.state.activeIndex = this.value
    }
  },

  render() {
    const panes = this.$slots.default || []
    const tabsData = {
      class: {
        'ant-tabs-mini': this.size === 'small',
        'ant-tabs-card': this.type === 'editable-card',
        [`ant-tabs-${this.type}`]: !!this.type
      }
    }
    const tabNavData = {
      props: {
        panes
      }
    }
    const panesIndex = panes.findIndex(pane =>
      (pane.componentOptions.propsData.index === this.store.state.activeIndex))

    const style = {
      'margin-left': `${-panesIndex * 100}%`
    }
    return (<div class="ant-tabs ant-tabs-top" {...tabsData}>
      <v-tab-nav {...tabNavData}></v-tab-nav>
      <div class="ant-tabs-content ant-tabs-content-animated" {...{ style }}>
        {panes}
      </div>
    </div>)
  },

  components: {
    VTabNav
  }
}
