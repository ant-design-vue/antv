<template>
  <div v-clickoutside="hide">
    <slot name="title"></slot>
    <v-transition type="slide-up">
      <div class="ant-dropdown"
           :class="placementCls"
           ref="menu"
           v-show="visible">
        <slot name="menu"></slot>
      </div>
    </v-transition>
  </div>
</template>

<style lang="less">
  @import './style/index.less';
  @import '../button/style/index.less';
</style>

<script type="text/babel">
  import Popper from '../mixins/popper'
  import Clickoutside from '../utils/clickoutside'

  export default {
    name: 'VDropdown',
    mixins: [Popper],
    directives: { Clickoutside },
    props: {
      placement: {
        type: String,
        default: 'bottomLeft'
      },
      trigger: {
        type: String,
        default: 'hover'
      }
    },
    data() {
      return {
        prefixCls: 'ant-dropdown',
        timeout: null
      }
    },
    methods: {
      show() {
        clearTimeout(this.timeout)
        this.visible = true
      },
      hide() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = false
        }, 150)
      },
      toggle() {
        this.visible = !this.visible
      }
    },
    mounted() {
      const menu = this.$refs.menu
      const title = this.$slots.title[0].elm
      if (this.trigger === 'click') {
        title.addEventListener('click', this.toggle)
      } else {
        title.addEventListener('mouseenter', this.show)
        title.addEventListener('mouseleave', this.hide)

        menu.addEventListener('mouseenter', this.show)
        menu.addEventListener('mouseleave', this.hide)
      }

      this.popper = menu
      this.reference = title
    }
  }
</script>


