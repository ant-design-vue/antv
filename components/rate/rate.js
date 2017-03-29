import Dom from '../utils/dom'

export default {
  name: 'VRate',

  props: {
    count: {
      type: Number,
      default: 5
    },
    value: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    character: [String, Object]
  },

  data() {
    return {
      hoverValue: undefined
    }
  },

  render() {
    const stars = []
    for (let i = 0; i < this.count; i++) {
      const starData = {
        ref: `star_${i}`,
        on: {
          click: this.onClick.bind(this, i),
          mousemove: this.onHover.bind(this, i)
        },
        class: this.getClass(i)
      }

      stars.push((<li class="ant-rate-star ant-rate-star-zero" {...starData}>
        <div class="ant-rate-star-first">{this.getCharacterVM()}</div>
        <div class="ant-rate-star-second">{this.getCharacterVM()}</div>
      </li>))
    }

    const rateData = {
      on: {
        mouseleave: this.onMouseLeave
      },
      class: {
        'ant-rate-disabled': this.disabled
      }
    }
    return (<span>
      <ul class="ant-rate" {...rateData}>{stars}</ul>
      {this.$slots.default}
      </span>)
  },

  methods: {
    getCharacterVM() {
      return !this.character ? (<v-icon type="star"/>) : this.character
    },

    getClass(index) {
      const { value, hoverValue, allowHalf } = this
      const starValue = index + 1
      const currentValue = hoverValue === undefined ? value : hoverValue
      if (allowHalf && currentValue + 0.5 === starValue) {
        return 'ant-rate-star ant-rate-star-half ant-rate-star-active'
      }
      return starValue <= currentValue ? 'ant-rate-star ant-rate-star-full' : 'ant-rate-star ant-rate-star-zero'
    },

    onClick(index, e) {
      if (this.disabled) return
      const value = this.getStarValue(index, e.pageX)
      this.onMouseLeave()
      this.$emit('input', value)
      this.$emit('onChange', value)
    },

    onHover(index, e) {
      if (this.disabled) return
      this.hoverValue = this.getStarValue(index, e.pageX)
      this.$emit('onHoverChange', this.hoverValue)
    },

    onMouseLeave() {
      if (this.disabled) return
      this.hoverValue = undefined
      this.$emit('onHoverChange', this.hoverValue)
    },

    getStarValue(index, x) {
      let value = index + 1
      if (this.allowHalf) {
        const leftEdge = Dom.getOffset(this.$refs.star_0).left
        const width = Dom.getOffset(this.$refs.star_1).left - leftEdge
        if ((x - leftEdge - (width * index)) < width / 2) {
          value -= 0.5
        }
      }
      return value
    }
  }
}
