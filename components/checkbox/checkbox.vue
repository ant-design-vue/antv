<template>
  <label class="ant-checkbox-wrapper"
         :class="wrapperCls">
    <span class="ant-checkbox"
          :class="classes">
      <input type="checkbox" class="ant-checkbox-input"
             :value="label"
             :disabled="isDisabled"
             v-model="model">
      <span class="ant-checkbox-inner"></span>
    </span>
    <span>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'VCheckbox',

    props: {
      value: Boolean,
      label: [String, Number, Boolean],
      disabled: Boolean,
      indeterminate: Boolean
    },

    data() {
      return {
        store: {}
      }
    },

    computed: {
      wrapperCls() {
        return {
          'ant-checkbox-group-item': this.store.state,
          'ant-checkbox-wrapper-disabled': this.isDisabled
        }
      },

      classes() {
        return {
          'ant-checkbox-indeterminate': this.indeterminate,
          'ant-checkbox-checked': this.isChecked,
          'ant-checkbox-disabled': this.isDisabled
        }
      },

      model: {
        get() {
          return this.store.state ? this.store.state.value : this.value
        },

        set(val) {
          if (this.store.state) {
            this.store.state.value = val
          } else {
            this.$emit('input', val)
            this.$emit('onChange', val)
          }
        }
      },

      isChecked() {
        return this.store.state ? this.model.indexOf(this.label) > -1 : this.model
      },

      isDisabled() {
        return this.store.state ? this.store.state.disabled || this.disabled : this.disabled
      }
    }
  }
</script>
