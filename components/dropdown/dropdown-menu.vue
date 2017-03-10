<template>
  <v-menu prefixCls="ant-dropdown" @onSelect="onSelect">
    <slot></slot>
  </v-menu>
</template>

<script type="text/babel">
  import VMenu from '../menu'

  export default {
    name: 'VDropdownMenu',
    methods: {
      onSelect(selectedIndex, item) {
        this.$emit('onSelect', selectedIndex, item)
      }
    },
    components: {
      VMenu
    }
  }
</script>

<style scoped>
  .ant-dropdown-menu {
    margin: 4px 0px;
  }
</style>
