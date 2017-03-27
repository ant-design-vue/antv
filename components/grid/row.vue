<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
  const prefixCls = 'ant-row'

  export default {
    name: 'VRow',
    props: {
      gutter: Number,
      type: String,
      justify: String,
      align: String
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
            [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify
          }
        ]
      },
      styles() {
        const ret = {}

        if (this.gutter) {
          const half = this.gutter / 2
          ret.marginLeft = ret.marginRight = `${-half}px`

          this.$nextTick(() => {
            this.$children.forEach((children) => {
              children.$el.style.paddingLeft = children.$el.style.paddingRight = `${half}px`
            })
          })
        }

        return ret
      }
    }
  }
</script>
