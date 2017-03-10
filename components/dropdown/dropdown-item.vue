<template>
  <v-menu-item prefixCls="ant-dropdown" :index="index" :disabled="disabled">
    <slot></slot>
  </v-menu-item>
</template>
<script type="text/babel">
  import VMenu from '../menu'

  export default {
    name: 'VDropdownItem',
    props: {
      index: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      VMenuItem: VMenu.Item
    }
  }
</script>
