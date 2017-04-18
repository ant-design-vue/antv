<template>
  <span :class="wrapCls">
    <template v-if="type !== 'textarea'">
      <span :class="addonCls" v-if="$slots.addonBefore">
        <slot name="addonBefore"></slot>
      </span>
      <input
        ref="input"
        :type="type"
        :class="inputCls"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :value="value"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup.enter="onPressEnter">
      <span class="ant-input-suffix" v-if="icon">
        <v-icon :type="icon" @click.native="onPressIcon"/>
      </span>
      <span :class="addonCls" v-if="$slots.addonAfter">
        <slot name="addonAfter"></slot>
      </span>
    </template>
    <textarea
      v-else
      ref="textarea"
      :class="textareaCls"
      :style="textareaStyles"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :readonly="readonly"
      v-model="currentValue"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.enter="onPressEnter">
    </textarea>
  </span>
</template>

<style lang="less">
  @import './style/index.less';

  .ant-input.pr26 {
    padding-right: 26px;
  }
</style>

<script type="text/babel">
  import calcTextareaHeight from '../utils/calcTextareaHeight'

  const prefixCls = 'ant-input'

  export default {
    name: 'VInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      size: String,
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value,
        textareaStyles: {}
      }
    },
    computed: {
      sizeCls() {
        return {
          large: 'lg',
          small: 'sm'
        }[this.size]
      },
      wrapCls() {
        return [
          {
            [`${prefixCls}-preSuffix-wrapper`]: !!this.icon,
            [`${prefixCls}-group`]: this.$slots.addonBefore || this.$slots.addonAfter,
            [`${prefixCls}-group-${this.sizeCls}`]: (this.$slots.addonBefore || this.$slots.addonAfter) && !!this.sizeCls
          }
        ]
      },
      inputCls() {
        return [
          `${prefixCls}`,
          {
            pr26: !!this.icon,
            [`${prefixCls}-${this.sizeCls}`]: !!this.sizeCls,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      },
      textareaCls() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ]
      },
      iconCls() {
        return [`anticon-${this.icon}`, `${prefixCls}-${this.icon}-icon`]
      },
      addonCls() {
        return [`${prefixCls}-group-addon`]
      }
    },
    methods: {
      resizeTextarea() {
        const { autosize, type } = this
        if (!autosize || type !== 'textarea') {
          return
        }
        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      onPressEnter(e) {
        this.$emit('onPressEnter', e)
      },
      onInput(e) {
        this.currentValue = e.target.value
      },
      onPressIcon(e) {
        this.$emit('onPressIcon', this.currentValue)
      },
      onFocus(e) {
        this.$emit('onFocus', e)
      },
      onBlur(e) {
        this.$emit('onBlur', e)
      }
    },
    watch: {
      currentValue(val) {
        this.$nextTick(() => {
          this.resizeTextarea()
        })
        this.$emit('input', val)
        this.$emit('onChange', val)
      }
    },
    mounted() {
      this.resizeTextarea()
    }
  }
</script>
