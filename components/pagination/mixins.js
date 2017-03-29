import KEYCODE from './keycode'

export default {
  props: {
    page: Number,
    allPages: Number
  },

  methods: {
    handleKeyDown(e) {
      const key = e.keyCode
      if (!((!e.shiftKey && (key >= KEYCODE.ZERO &&
        key <= KEYCODE.NINE)) ||
        key === KEYCODE.ARROW_LEFT ||
        key === KEYCODE.ARROW_RIGHT ||
        key === KEYCODE.DELETE ||
        key === KEYCODE.BACKSPACE)) {
        e.preventDefault()
      }
    },

    handleKeyUp(e) {
      const _val = e.target.value
      let val

      if (_val === '') {
        val = _val
      } else if (isNaN(Number(_val))) {
        val = this.page
      } else {
        val = Number(_val)
      }

      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(val)
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(val - 1)
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(val + 1)
      }
    },

    handleChange(page) {
      this.$emit('onChange', page)
    }
  }
}
