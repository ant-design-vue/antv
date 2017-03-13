<template>
  <div class="ant-radio-group"
       :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import Store from './store'

  export default {
    name: 'VRadioGroup',

    props: {
      value: [String, Number, Boolean],
      disabled: Boolean,
      size: String
    },

    data() {
      const store = new Store(this, { value: this.value, disabled: this.disabled })
      return {
        store
      }
    },

    watch: {
      'store.state.value': function (val) {
        this.$emit('input', val)
        this.$emit('onChange', val)
      }
    },

    computed: {
      classes() {
        return {
          [`ant-radio-group-${this.size}`]: !!this.size
        }
      }
    }
  }
</script>
