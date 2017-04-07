import Dom from '../utils/dom'
import KeyCode from '../utils/keycode'

let openCount = 0
let mousePosition
let mousePositionEventBinded

export default {
  name: 'VModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: [String, Object],
    content: [String, Object],
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 520
    },
    modalStyle: Object,
    wrapClassName: String,
    footer: [Object, Array]
  },

  data() {
    return {
      wrapVisible: this.value
    }
  },

  computed: {
    visible() {
      if (this.value) this.wrapVisible = true
      return this.value
    }
  },

  render() {
    const {
      visible,
      wrapVisible,
      maskClosable,
      closable,
      confirmLoading
    } = this

    let title = this.title
    if (title) {
      title = (<div class="ant-modal-header">
        <div class="ant-modal-title">{this.title}</div>
      </div>)
    }

    let closer
    if (closable) {
      closer = (<button aria-label="Close" class="ant-modal-close" on-click={this.onCancel}>
        <span class="ant-modal-close-x"></span>
      </button>)
    }

    let footer = this.footer
    if (footer === undefined) {
      footer = (<div class="ant-modal-footer">
        <v-button
          size="large"
          nativeOn-click={this.onCancel}
        >
          {this.cancelText}
        </v-button>
        <v-button
          type="primary"
          size="large"
          loading={confirmLoading}
          nativeOn-click={this.onOk}
        >
          {this.okText}
        </v-button>
      </div>)
    } else if (footer !== null) {
      footer = (<div class="ant-modal-footer">
        {this.footer}
      </div>)
    }

    const wrapData = {
      class: this.wrapClassName
    }

    if (maskClosable) {
      wrapData.on = {
        click: this.onMaskClick
      }
    }

    return (<div on-keydown={this.onKeyDown}>
      <v-transition type="fade">
        <div class="ant-modal-mask" v-show={visible}></div>
      </v-transition>
      <div tabindex="-1" class="ant-modal-wrap " role="dialog"
           ref="wrap"
           v-show={wrapVisible}
           {...wrapData}>
        <v-transition type="zoom" on-enter={this.onEnter} on-before-enter={this.onBeforeEnter}
                      on-after-leave={this.onAfterLeave}>
          <div role="document" class="ant-modal"
               v-show={visible}
               style={{ width: `${this.width}px`, ...this.modalStyle }}
               ref="dialog">
            <div class="ant-modal-content">
              {closer}
              {title}
              <div class="ant-modal-body">
                {this.$slots.default || this.content}
              </div>
              {footer}
            </div>
            <div tabindex="0" style={{ width: '0px', height: '0px', overflow: 'hidden' }} ref="sentinel">sentinel</div>
          </div>
        </v-transition>
      </div>
    </div>)
  },

  mounted() {
    document.body.appendChild(this.$el)
  },

  beforeCreate() {
    if (mousePositionEventBinded) return
    mousePositionEventBinded = true
    document.documentElement.addEventListener('mousedown', (e) => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      }
    })
  },

  methods: {
    onBeforeEnter(el) {
      if (this.visible) {
        // 设置visibility:hidden，计算隐藏了的元素实际offset
        el.style.visibility = 'hidden'
        el.style.display = ''
        this.addScrollingEffect()

        if (mousePosition) {
          const elOffset = Dom.getOffset(el)
          Dom.setTransformOrigin(el,
            `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`)
        } else {
          Dom.setTransformOrigin(el, '')
        }

        mousePosition = null

        el.style.visibility = ''
        el.style.display = 'none'
      }
    },

    onEnter(el) {
      if (this.visible) {
        this.$refs.wrap.focus()
      }
    },

    onAfterLeave() {
      this.wrapVisible = false
      Dom.setTransformOrigin(this.$refs.dialog, '')
      this.removeScrollingEffect()
      this.$emit('afterClose')
    },

    onOk(e) {
      this.$emit('onOk', e)
    },

    onCancel(e) {
      this.$emit('onCancel', e)
    },

    onKeyDown(e) {
      const { keyboard, visible } = this
      if (keyboard && e.keyCode === KeyCode.ESC) {
        this.onCancel(e)
      }
      // keep focus inside dialog
      if (visible) {
        if (e.keyCode === KeyCode.TAB) {
          const activeElement = document.activeElement
          const dialogRoot = this.$refs.wrap
          const sentinel = this.$refs.sentinel
          if (e.shiftKey) {
            if (activeElement === dialogRoot) {
              sentinel.focus()
            }
          } else if (activeElement === this.refs.sentinel) {
            dialogRoot.focus()
          }
        }
      }
    },

    onMaskClick(e) {
      if (e.target === e.currentTarget) {
        this.onCancel(e)
      }
    },

    checkScrollbar() {
      this.bodyIsOverflowing = document.body.clientWidth < window.innerWidth
      if (this.bodyIsOverflowing) {
        this.scrollbarWidth = Dom.getScrollBarSize()
      }
    },

    setScrollbar() {
      if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollbarWidth}px`
      }
    },

    addScrollingEffect() {
      openCount++
      if (openCount !== 1) {
        return
      }
      this.checkScrollbar()
      this.setScrollbar()
      document.body.style.overflow = 'hidden'
    },

    removeScrollingEffect() {
      openCount--
      if (openCount !== 0) {
        return
      }
      document.body.style.overflow = ''
      this.resetScrollbar()
    },

    resetScrollbar() {
      document.body.style.paddingRight = ''
    }
  }
}
