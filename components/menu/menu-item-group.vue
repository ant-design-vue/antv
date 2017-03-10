<template>
  <li :class="[`${prefixCls}-menu-item-group`]">
    <div :class="[`${prefixCls}-menu-item-group-title`]"
         :style="styles">
      {{title}}
    </div>
    <ul :class="[`${prefixCls}-menu-item-group-list`]">
      <slot></slot>
    </ul>
  </li>
</template>

<script type="text/babel">
  export default {
    name: 'VMenuItemGroup',
    props: {
      prefixCls: {
        type: String,
        default: 'ant'
      },
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        paddingLeft: null
      }
    },
    computed: {
      styles() {
        return { paddingLeft: `${this.paddingLeft}px` }
      }
    }
  }
</script>
