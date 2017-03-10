<template>
  <div class="ant-collapse"
       :class="{ 'ant-collapse-borderless': bordered}">
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
      defaultActiveIndex: {
        type: String
      },
      bordered: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const store = new Store(this, { accordion: this.accordion })
      return {
        store
      }
    },
    mounted() {
      this.$children.forEach((node) => {
        node.store = this.store
      })

      if (this.defaultActiveIndex) {
        this.store.commit('openPanel', { index: this.defaultActiveIndex })
      }
    }
  }
</script>
