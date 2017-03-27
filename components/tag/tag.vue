<template>
  <v-transition
    type="zoom"
    prefixCls="ant-tag"
    @after-leave="afterLeave">
    <div class="ant-tag"
         :class="classes"
         :style="style"
         v-show="!closed">
      <span class="ant-tag-text"><slot></slot></span>
      <v-icon type="cross" v-if="closable" @click.native="onClose"/>
    </div>
  </v-transition>
</template>
<script>
  export default {
    name: 'VTag',

    props: {
      count: Number,
      color: String,
      closable: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        closed: false
      }
    },

    computed: {
      presetColor() {
        return /^(pink|red|yellow|orange|cyan|green|blue|purple)(-inverse)?$/.test(this.color)
      },

      classes() {
        return {
          [`ant-tag-${this.color}`]: this.presetColor,
          'ant-tag-has-color': (this.color && !this.presetColor),
          'ant-tag-close': this.closed
        }
      },

      style() {
        return { backgroundColor: (this.color && !this.presetColor) ? this.color : null }
      }
    },

    methods: {
      onClose(e) {
        this.$emit('onClose', e)
        // 若取消onClose动作，不往下执行
        if (e.defaultPrevented) {
          return
        }

        this.$el.style.width = `${this.$el.getBoundingClientRect().width}px`
        // 解决设置宽度为0时动画效果问题，但原因未知
        this.$el.style.width = `${this.$el.getBoundingClientRect().width}px`
        this.closed = true
      },

      afterLeave() {
        this.$emit('afterClose')
      }
    }
  }
</script>
