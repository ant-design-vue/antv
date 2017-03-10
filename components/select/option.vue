<template>
  <v-menu-item prefixCls="ant-select-dropdown" :index="value" :disabled="disabled">
    <slot></slot>
  </v-menu-item>
</template>
<script type="text/babel">
  import VMenu from '../menu'

  export default {
    name: 'VOption',
    props: {
      value: {
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
