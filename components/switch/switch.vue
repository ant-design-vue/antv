<template>
  <span class="ant-switch"
        :class="classes"
        @click="onClick">
    <span class="ant-switch-inner">
      <slot name="checkedChildren" v-if="$slots.checkedChildren && value"></slot>
      <slot name="unCheckedChildren" v-if="$slots.unCheckedChildren && !value"></slot>
      <template v-if="isEmptySlot && value">{{checkedChildren}}</template>
      <template v-if="isEmptySlot && !value">{{unCheckedChildren}}</template>
    </span>
  </span>
</template>
<script>
  export default {
    name: 'VSwitch',

    props: {
      value: Boolean,
      disabled: Boolean,
      checkedChildren: String,
      unCheckedChildren: String,
      size: String
    },

    computed: {
      classes() {
        return {
          'ant-switch-checked': this.value,
          'ant-switch-disabled': this.disabled,
          [`ant-switch-${this.size}`]: !!this.size
        }
      },

      isEmptySlot() {
        return Object.keys(this.$slots).length === 0
      }
    },

    methods: {
      onClick() {
        if (this.disabled) return
        const val = !this.value
        this.$emit('input', val)
        this.$emit('onChange', val)
      }
    }
  }
</script>
