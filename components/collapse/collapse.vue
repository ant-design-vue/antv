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
      defaultActiveIndex: [String, Array],
      bordered: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const store = new Store(this, { accordion: this.accordion })
      return {
        store
      }
    },
    beforeMount() {
      let { defaultActiveIndex } = this
      if (defaultActiveIndex) {
        defaultActiveIndex = typeof defaultActiveIndex === 'string' ? [defaultActiveIndex] : defaultActiveIndex
        this.store.commit('openPanel', { indexs: defaultActiveIndex })
      }
    }
  }
</script>
