import KEYCODE from '../utils/keycode'

export default {
  props: {
    page: Number,
    allPages: Number
  },

  methods: {
    onKeyDown(e) {
      const key = e.keyCode
      if (!((!e.shiftKey && (key >= KEYCODE.ZERO &&
        key <= KEYCODE.NINE)) ||
        key === KEYCODE.LEFT ||
        key === KEYCODE.RIGHT ||
        key === KEYCODE.DELETE ||
        key === KEYCODE.BACKSPACE)) {
        e.preventDefault()
      }
    },

    onKeyUp(e) {
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
      } else if (e.keyCode === KEYCODE.UP) {
        this.handleChange(val - 1)
      } else if (e.keyCode === KEYCODE.DOWN) {
        this.handleChange(val + 1)
      }
    },

    handleChange(page) {
      this.$emit('onChange', page)
    }
  }
}
