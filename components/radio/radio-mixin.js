export default {
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean
  },

  data() {
    return {
      store: {}
    }
  },

  computed: {
    model: {
      get() {
        return this.store.state ? this.store.state.value : this.value
      },

      set(val) {
        if (this.store.state) {
          this.store.state.value = val
        } else {
          this.$emit('input', val)
        }
      }
    },

    isDisabled() {
      return this.store.state ? this.store.state.disabled || this.disabled : this.disabled
    }
  }
}
