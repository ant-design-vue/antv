import Dom from '../utils/dom'

const KEY_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

export default {
  name: 'VTabNav',

  props: {
    panes: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      offset: 0,
      next: false,
      prev: false,
      tabsVM: null,
      action: '', // 保存当前动作, add／remove／change／nextPrev
      store: this.$parent.store
    }
  },

  render() {
    const showNextPrev = this.prev || this.next
    const nextPrevButton = showNextPrev ? this.getNextPrevVM() : null
    const tabsVM = this.getTabsVM()
    const extraVM = this.getExtraVM()

    return (<div role="tablist" class="ant-tabs-bar" tabindex="0" onKeydown={this.onKeyDown}>
      {extraVM}
      <div class="ant-tabs-nav-container"
           {...{ class: { 'ant-tabs-nav-container-scrolling': showNextPrev } }}>
        {nextPrevButton}
        <div class="ant-tabs-nav-wrap" ref="navWrap">
          <div class="ant-tabs-nav-scroll">
            <div class="ant-tabs-nav" ref="nav">
              <div class="ant-tabs-ink-bar" ref="inkBar"></div>
              {tabsVM}
            </div>
          </div>
        </div>
      </div>
    </div>)
  },

  beforeUpdate() {
    this.setNextPrev()
    // 非card类型才有lnkbar
    if (['card', 'editable-card'].indexOf(this.store.state.key) === -1) {
      this.setLnkBar()
    }
    // 在tab点击，添加／删除tab时才滑动到选中的tab
    if (['add', 'remove', 'change'].indexOf(this.action) !== -1) {
      this.$nextTick(() => {
        this.scrollToActiveTab()
      })
    }
    this.action = ''
  },

  methods: {
    getTabsVM() {
      const { activeIndex, type } = this.store.state
      const tabs = this.panes.map((pane) => {
        const { index, disabled, closable, tab } = pane.componentOptions.propsData
        const active = activeIndex === index
        const data = {
          class: {
            'ant-tabs-tab-active': active,
            'ant-tabs-tab-disabled': disabled === '' || disabled
          },
          on: {
            click: this.onTabClick.bind(this, index)
          }
        }
        if (active) {
          data.ref = 'activeTab'
        }
        return (<div role="tab" class="ant-tabs-tab" {...data}>
          {tab}
          { (closable || closable === undefined) && type === 'editable-card' ?
            <v-icon type="close" nativeOnClick={this.removeTab.bind(this, index)}/> : null }
        </div>)
      })
      return tabs
    },

    getNextPrevVM() {
      return (<span>
          <span unselectable="unselectable"
                class="ant-tabs-tab-prev"
                onClick={this.scrollToPrev}
                {...{ class: { 'ant-tabs-tab-btn-disabled': !this.prev } }}>
              <span class="ant-tabs-tab-prev-icon"></span>
            </span><span unselectable="unselectable" class="ant-tabs-tab-next"
                         onClick={this.scrollToNext}
                         {...{ class: { 'ant-tabs-tab-btn-disabled': !this.next } }}>
              <span class="ant-tabs-tab-next-icon"></span>
            </span>
        </span>)
    },

    getExtraVM() {
      let { tabBarExtraContent } = this.store.state
      const { type, hideAdd } = this.store.state
      if (type === 'editable-card') {
        if (!hideAdd) {
          tabBarExtraContent = (<span><v-icon type="plus" class="ant-tabs-new-tab" nativeOnClick={this.createNewTab}/>
            {tabBarExtraContent}</span>)
        }
      }
      return (<div style="float: right">
        <div class="ant-tabs-extra-content">
          {tabBarExtraContent}
        </div>
      </div>)
    },

    createNewTab() {
      this.action = 'add'
      this.store.component.$emit('onTabAdd')
    },

    removeTab(index, e) {
      this.action = 'remove'
      this.store.component.$emit('onTabRemove', index)
      e.stopPropagation()
    },

    onTabClick(index) {
      if (this.store.state.activeIndex === index) return
      this.action = 'change'
      this.store.commit('onTabClick', index)
    },

    onKeyDown(e) {
      const keyCode = e.keyCode
      e.preventDefault()
      if (keyCode === KEY_CODE.RIGHT || keyCode === KEY_CODE.DOWN) {
        this.onTabClick(this.getNextPrevActiveIndex(true))
      } else if (keyCode === KEY_CODE.LEFT || keyCode === KEY_CODE.UP) {
        this.onTabClick(this.getNextPrevActiveIndex(false))
      }
    },

    getNextPrevActiveIndex(next) {
      const activeIndex = this.store.state.activeIndex
      const children = []
      this.panes.forEach((pane) => {
        if (pane.child && !pane.child.disabled) {
          if (next) {
            children.push(pane.child)
          } else {
            children.unshift(pane.child)
          }
        }
      })
      const length = children.length
      let ret = length && children[0].index
      children.forEach((child, i) => {
        if (child.index === activeIndex) {
          if (i === length - 1) {
            ret = children[0].index
          } else {
            ret = children[i + 1].index
          }
        }
      })
      return ret
    },

    scrollToPrev() {
      if (!this.prev) return
      const navWrap = this.$refs.navWrap
      const navWrapWH = this.getOffsetWH(navWrap)
      this.action = 'nextPrev'
      this.setOffset(this.offset + navWrapWH)
    },

    scrollToNext() {
      if (!this.next) return
      const navWrap = this.$refs.navWrap
      const navWrapWH = this.getOffsetWH(navWrap)
      this.action = 'nextPrev'
      this.setOffset(this.offset - navWrapWH)
    },

    scrollToActiveTab() {
      const { activeTab, navWrap } = this.$refs
      if (activeTab) {
        const activeTabWH = this.getOffsetWH(activeTab)
        const navWrapWH = this.getOffsetWH(navWrap)
        let { offset } = this
        const navOffset = this.getOffsetLT(navWrap)
        const activeTabOffset = this.getOffsetLT(activeTab)
        if (navOffset > activeTabOffset) {
          offset += (navOffset - activeTabOffset)
          this.setOffset(offset)
        } else if ((navOffset + navWrapWH) < (activeTabOffset + activeTabWH)) {
          offset -= (activeTabOffset + activeTabWH) - (navOffset + navWrapWH)
          this.setOffset(offset)
        }
      }
    },

    setNextPrev() {
      const nav = this.$refs.nav
      const navWH = this.getOffsetWH(nav)
      const navWrap = this.$refs.navWrap
      const navWrapWH = this.getOffsetWH(navWrap)
      const minOffset = navWrapWH - navWH
      if (minOffset >= 0) {
        this.next = false
        this.setOffset(0, false)
        this.offset = 0
      } else if (minOffset < this.offset) {
        this.next = true
      } else {
        this.next = false
        this.setOffset(minOffset, false)
        this.offset = minOffset
      }
      this.prev = this.offset < 0
    },

    getOffsetWH(node) {
      return node.offsetWidth
    },

    getOffsetLT(node) {
      return node.getBoundingClientRect().left
    },

    setLnkBar() {
      const { activeTab, nav, inkBar } = this.$refs
      const containerOffset = this.getOffsetLT(nav)
      const inkBarStyle = inkBar.style
      if (activeTab) {
        const tabOffset = this.getOffsetLT(activeTab)
        const left = tabOffset - containerOffset
        Dom.setTransform(inkBarStyle, `translate3d(${left}px,0,0)`)
        inkBarStyle.width = `${activeTab.offsetWidth}px`
      }
      inkBarStyle.display = activeTab ? 'block' : 'none'
    },

    setOffset(offset, checkNextPrev = true) {
      const target = Math.min(0, offset)
      if (this.offset !== target) {
        this.offset = target
        const navOffset = {
          value: `translate3d(${target}px,0,0)`
        }
        const navStyle = this.$refs.nav.style
        Dom.setTransform(navStyle, navOffset.value)
      }
      if (checkNextPrev) {
        this.setNextPrev()
      }
    }
  }
}
