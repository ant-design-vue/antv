<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  const prefixCls = 'ant-btn-group'

  export default {
    name: 'VButtonGroup',
    props: {
      size: String,
      shape: String
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
            [`${prefixCls}-${sizeCls}`]: !!sizeCls,
            [`${prefixCls}-${this.shape}`]: !!this.shape
          }
        ]
      }
    }
  }
</script>
