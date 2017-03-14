<template>
  <div class="ant-checkbox-group"
       :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import Store from './store'

  export default {
    name: 'VCheckboxGroup',

    props: {
      value: Array,
      disabled: Boolean
    },

    data() {
      const store = new Store(this, { value: this.value, disabled: this.disabled })
      return {
        store
      }
    },

    watch: {
      value() {
        this.store.state.value = this.value
      },

      'store.state.value': function (val) {
        this.$emit('input', val)
        this.$emit('onChange', val)
      }
    }
  }
</script>

