<template>
  <div class="ant-collapse"
       :class="{ 'ant-collapse-borderless': !bordered}">
    <slot></slot>
  </div>
</template>

<style lang="less">
  @import "./style/index.less";
</style>

<script type="text/babel">
  import Store from './store'

  export default {
    name: 'VCollapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: [String, Array],
      bordered: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const store = new Store(this, { accordion: this.accordion, injected: true })
      return {
        store
      }
    },
    mounted() {
      let { value } = this
      if (value) {
        value = typeof value === 'string' ? [value] : value
        this.store.commit('openPanel', { indexs: value })
      } else if (this.accordion && this.$children.length > 0) {
        this.store.commit('openPanel', { indexs: [this.$children[0].index] })
      }
    }
  }
</script>
