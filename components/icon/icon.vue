<template>
  <i :class="classes" :style="styles"></i>
</template>
<script type="text/babel">
  const iconPrefixCls = 'anticon'

  export default {
    name: 'VIcon',
    props: {
      type: String,
      size: [Number, String],
      color: String
    },
    computed: {
      classes() {
        return `${iconPrefixCls} ${iconPrefixCls}-${this.type}`
      },
      styles() {
        const style = {}

        if (this.size) {
          style['font-size'] = `${this.size}px`
        }

        if (this.color) {
          style.color = this.color
        }

        return style
      }
    }
  }
</script>
