import Vue from 'vue'

import Popper from './popper'

export default {
  mixins: [Popper],

  props: {
    placement: {
      type: String,
      default: 'top'
    },
    title: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    mouseEnterDelay: {
      type: Number,
      default: 0
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      visibleArrow: true
    }
  },

  beforeCreate() {
    this.popperVM = new Vue({
      data: { vnode: '' },
      render(h) {
        return this.vnode
      }
    }).$mount()
  },

  render(h) {
    this.popperVM.vnode = (
      <v-transition type="zoom-big-fast">
        <div class={ this.popperCls }
             ref="popper"
             v-show={ this.visible }>
          <div class={ [`${this.prefixCls}-content`] }>
            <v-tooltip-content { ...this }>
            </v-tooltip-content>
          </div>
        </div>
      </v-transition>)

    if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default
    return this.$slots.default[0]
  },

  mounted() {
    if (this.$slots.default && this.$slots.default.length > 0) {
      this.reference = this.$slots.default[0].elm

      if (this.trigger === 'click') {
        this.reference.addEventListener('click', this.toggle)
      } else if (this.trigger === 'focus') {
        this.reference.addEventListener('focus', this.showPopper)
        this.reference.addEventListener('blur', this.closePopper)
      } else {
        this.reference.addEventListener('mouseenter', this.showPopper)
        this.reference.addEventListener('mouseleave', this.closePopper)
      }

      this.$nextTick(() => {
        this.popper = this.$refs.popper
        if (this.trigger === 'hover') {
          this.popper.addEventListener('mouseenter', () => {
            clearTimeout(this.timeout)
          })
          this.popper.addEventListener('mouseleave', this.closePopper)
        }
      })
    }
  },

  computed: {
    popperCls() {
      return [this.prefixCls].concat(this.placementCls)
    }
  },

  methods: {
    toggle() {
      this.visible = !this.visible
    },

    showPopper() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = true
        this.$emit('onVisibleChange', this.visible)
      }, this.mouseEnterDelay)
    },

    closePopper() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = false
        this.$emit('onVisibleChange', this.visible)
      }, this.mouseLeaveDelay)
    }
  }
}
