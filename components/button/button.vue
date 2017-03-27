<template>
  <button :type="htmlType" :class="classes">
    <i :class="loadingCls" v-if="loading"></i><i :class="typeCls" v-if="icon && !loading"></i>
    <slot></slot>
  </button>
</template>
<script type="text/babel">
  const prefixCls = 'ant-btn'
  const iconPrefixCls = 'anticon'

  export default {
    name: 'VButton',
    props: {
      type: String,
      htmlType: {
        type: String,
        default: 'button'
      },
      icon: String,
      shape: String,
      size: String,
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        const sizeCls = {
          large: 'lg',
          small: 'sm'
        }[this.size]

        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${sizeCls}`]: !!sizeCls,
            [`${prefixCls}-loading`]: this.loading
          }
        ]
      },
      loadingCls() {
        return `${iconPrefixCls} ${iconPrefixCls}-spin ${iconPrefixCls}-loading`
      },
      typeCls() {
        return [
          `${iconPrefixCls}`,
          {
            [`${iconPrefixCls}-${this.icon}`]: !!this.icon
          }
        ]
      }
    }
  }
</script>
