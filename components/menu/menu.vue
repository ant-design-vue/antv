<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<style lang="less">
  @import './style/index.less';
</style>

<script type="text/babel">
  import ENUM from './enum'
  import Store from './store'

  export default {
    name: 'VMenu',
    props: {
      prefixCls: {
        type: String,
        default: 'ant'
      },
      mode: {
        type: String,
        default: 'vertical'
      },
      uniqueOpened: {
        type: Boolean,
        default: false
      },
      defaultSelectedIndex: String,
      activeIndex: Number,
      router: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const store = new Store(this, { uniqueOpened: this.uniqueOpened, router: this.router })
      return {
        store,
        paddingLeft: 24,
        menuItems: []
      }
    },
    computed: {
      classes() {
        return [
          `${this.prefixCls}-menu`,
          `${this.prefixCls}-menu-light`,
          `${this.prefixCls}-menu-root`,
          `${this.prefixCls}-menu-${this.mode}`
        ]
      }
    },
    watch: {
      activeIndex() {
        this.menuItems.forEach((option, index) => {
          option.active = this.activeIndex === index
        })
      },
      $route(to) {
        if (!this.router) return
        this.store.commit('selectMenu', { index: to.name })
      }
    },
    mounted() {
      let index = 0
      const deepNodes = (nodes, paddingLeft) => {
        nodes.forEach((node) => {
          if (node.$options.name === 'VSubMenu') {
            node.mode = this.mode
            node.store = this.store
            if (this.mode === ENUM.MODE.INLINE) {
              node.paddingLeft = paddingLeft
              deepNodes(node.$children, node.paddingLeft * 2)
            } else {
              deepNodes(node.$children)
            }
          } else if (node.$options.name === 'VMenuItem') {
            node.mode = this.mode
            node.store = this.store
            node.activeIndex = index
            if (this.mode === ENUM.MODE.INLINE) {
              node.paddingLeft = paddingLeft
            }
            this.menuItems.push(node)
            index += 1
          } else {
            deepNodes(node.$children)
          }
        })
      }

      deepNodes(this.$children, this.paddingLeft)

      if (this.defaultSelectedIndex) {
        this.store.commit('selectMenu', { index: this.defaultSelectedIndex })
        return
      }

      if (this.router && this.$route.name) {
        this.store.commit('selectMenu', { index: this.$route.name })
      }
    }
  }
</script>
