<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  const prefixCls = 'ant-col'

  export default {
    name: 'VCol',
    props: {
      span: {
        type: Number,
        required: true
      },
      order: Number,
      offset: Number,
      push: Number,
      pull: Number
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.span}`,
          {
            [`${prefixCls}-order-${this.order}`]: this.order,
            [`${prefixCls}-offset-${this.offset}`]: this.offset,
            [`${prefixCls}-push-${this.push}`]: this.push,
            [`${prefixCls}-pull-${this.pull}`]: this.pull
          }
        ]
      }
    }
  }
</script>
