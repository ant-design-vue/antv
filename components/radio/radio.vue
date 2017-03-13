<template>
  <label class="ant-radio-wrapper"
         :class="wrapperCls">
    <span class="ant-radio"
          :class="classes">
      <input type="radio" class="ant-radio-input"
             :value="label"
             :disabled="isDisabled"
             v-model="model">
      <span class="ant-radio-inner"></span>
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
    name: 'VRadio',

    mixins: [RadioMixin],

    computed: {
      wrapperCls() {
        return {
          'ant-radio-wrapper-disabled': this.isDisabled
        }
      },

      classes() {
        return {
          'ant-radio-checked': this.label === this.value,
          'ant-radio-disabled': this.isDisabled
        }
      }
    }
  }
</script>
