<template>
  <label class="ant-radio-button-wrapper"
         :class="wrapperCls">
    <span class="ant-radio-button"
          :class="classes">
      <input type="radio" class="ant-radio-button-input"
             :value="label"
             :disabled="isDisabled"
             v-model="model">
      <span class="ant-radio-button-inner"></span>
    </span>
    <span>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import RadioMixin from './radio-mixin'

  export default {
    name: 'VRadioButton',

    mixins: [RadioMixin],

    computed: {
      wrapperCls() {
        return {
          'ant-radio-button-wrapper-checked': this.label === this.value,
          'ant-radio-button-wrapper-disabled': this.isDisabled
        }
      },

      classes() {
        return {
          'ant-radio-button-checked': this.label === this.value,
          'ant-radio-button-disabled': this.isDisabled
        }
      }
    }
  }
</script>

