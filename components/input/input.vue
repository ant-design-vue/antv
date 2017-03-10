<template>
  <div :class="wrapCls">
    <template v-if="type !== 'textarea'">
      <span :class="addonCls" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </span>
      <input
        :type="type"
        :class="inputCls"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :value="value"
        @input="onInput"
        @keyup.enter="onPressEnter">
      <span class="ant-input-suffix" v-if="icon">
        <i class="anticon" :class="iconCls"
           @click="onPressIcon"></i>
      </span>
      <span :class="addonCls" v-if="$slots.append">
        <slot name="append"></slot>
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
      @keyup.enter="onPressEnter">
    </textarea>
  </div>
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
            [`${prefixCls}-type`]: this.type,
            [`${prefixCls}-group`]: this.$slots.prepend || this.$slots.append,
            [`${prefixCls}-group-${this.sizeCls}`]: (this.$slots.prepend || this.$slots.append) && !!this.sizeCls
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
      onPressEnter(event) {
        this.$emit('onPressEnter', event)
      },
      onInput(event) {
        this.currentValue = event.target.value
      },
      onPressIcon(event) {
        this.$emit('onPressIcon', event)
      }
    },
    watch: {
      currentValue(val) {
        this.$nextTick(() => {
          this.resizeTextarea()
        })
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    mounted() {
      this.resizeTextarea()
    }
  }
</script>
