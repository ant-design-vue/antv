<template lang="html">
  <li
    v-show="visible"
    :style="styles"
    :class="classes"
    @click="onClick">
    <slot></slot>
  </li>
</template>

<script type="text/babel">
  export default {
    name: 'VMenuItem',
    props: {
      prefixCls: {
        type: String,
        default: 'ant'
      },
      index: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        store: {},
        mode: null,
        active: false,
        activeIndex: null,
        visible: true,
        selected: false,
        paddingLeft: null
      }
    },
    computed: {
      styles() {
        return { paddingLeft: `${this.paddingLeft}px` }
      },
      classes() {
        return [
          `${this.prefixCls}-menu-item`,
          {
            [`${this.prefixCls}-menu-item-selected`]: this.selected,
            [`${this.prefixCls}-menu-item-disabled`]: this.disabled,
            [`${this.prefixCls}-menu-item-active`]: this.active
          }]
      }
    },
    methods: {
      onClick() {
        if (this.disabled) return
        this.store.commit('selectMenu', { index: this.index })
      }
    }
  }
</script>
