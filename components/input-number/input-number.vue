<template>
  <div class="ant-input-number"
       :class="classes">
    <div class="ant-input-number-handler-wrap">
      <span unselectable="unselectable" class="ant-input-number-handler ant-input-number-handler-up "
            :class="upCls"
            @mousedown="up"
            @mouseup="stop"
            @mouseleave="stop">
        <span unselectable="unselectable" class="ant-input-number-handler-up-inner"></span>
      </span>
      <span unselectable="unselectable"
            class="ant-input-number-handler ant-input-number-handler-down"
            :class="downCls"
            @mousedown="down"
            @mouseup="stop"
            @mouseleave="stop">
        <span unselectable="unselectable" class="ant-input-number-handler-down-inner"></span>
      </span>
    </div>
    <div class="ant-input-number-input-wrap">
      <input class="ant-input-number-input" autocomplete="off" min="min" max="max"
             v-model="formatValue"
             @focus="onFocus"
             @blur="onBlur"
             @keydown="onKeyDown"
             @keyup="stop">
    </div>
  </div>
</template>
<script>
  /**
   * When click and hold on a button - the speed of auto changin the value.
   */
  const SPEED = 200

  /**
   * When click and hold on a button - the delay before auto changin the value.
   */
  const DELAY = 600

  /**
   * 源码参考https://github.com/react-component/input-number
   */
  export default {
    name: 'VInputNumber',

    props: {
      value: Number,
      disabled: Boolean,
      size: String,
      step: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      formatter: {
        type: Function,
        default(value) {
          return value
        }
      }
    },

    data() {
      return {
        inputValue: this.toPrecisionAsStep(this.toNumber(this.value)),
        focused: false
      }
    },

    watch: {
      value(val) {
        this.inputValue = this.toPrecisionAsStep(this.toNumber(val))
      }
    },

    methods: {
      onFocus() {
        this.focused = true
      },

      onBlur() {
        this.focused = false
        const value = this.getCurrentValidValue(this.inputValue)
        this.setValue(value)
      },

      getCurrentValidValue(value) {
        let val = value
        const props = this
        if (val === '') {
          val = ''
        } else if (!this.isNotCompleteNumber(val)) {
          val = Number(val)
          if (val < props.min) {
            val = props.min
          }
          if (val > props.max) {
            val = props.max
          }
        } else {
          val = this.value
        }
        return this.toNumber(val)
      },

      setValue(v, callback) {
        const newValue = this.isNotCompleteNumber(parseFloat(v)) ? undefined : parseFloat(v)
        const changed = newValue !== this.value
        this.inputValue = this.toPrecisionAsStep(v)

        if (changed) {
          this.$emit('input', newValue)
          this.$emit('onChange', newValue)
        }
      },

      getPrecision(value) {
        const valueString = value.toString()
        if (valueString.indexOf('e-') >= 0) {
          return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10)
        }
        let precision = 0
        if (valueString.indexOf('.') >= 0) {
          precision = valueString.length - valueString.indexOf('.') - 1
        }
        return precision
      },

      getMaxPrecision(currentValue, ratio = 1) {
        const ratioPrecision = this.getPrecision(ratio)
        const stepPrecision = this.getPrecision(this.step)
        const currentValuePrecision = this.getPrecision(currentValue)
        if (!currentValue) {
          return ratioPrecision + stepPrecision
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision)
      },

      getPrecisionFactor(currentValue, ratio = 1) {
        const precision = this.getMaxPrecision(currentValue, ratio)
        return Math.pow(10, precision)
      },

      toPrecisionAsStep(num) {
        if (this.isNotCompleteNumber(num) || num === '') {
          return num
        }
        const precision = Math.abs(this.getMaxPrecision(num))
        if (precision) {
          return Number(num).toFixed(precision)
        }
        return num.toString()
      },

      isNotCompleteNumber(num) {
        return (
          isNaN(num) ||
          num === '' ||
          num === null ||
          (num && num.toString().indexOf('.') === num.toString().length - 1)
        )
      },

      toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
          return num
        }
        return Number(num)
      },

      upStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat)
        const precision = Math.abs(this.getMaxPrecision(val, rat))
        let result
        if (typeof val === 'number') {
          result =
            (((precisionFactor * val) + (precisionFactor * this.step * rat))
            / precisionFactor).toFixed(precision)
        } else {
          result = this.min === -Infinity ? this.step : this.min
        }
        return this.toNumber(result)
      },

      downStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat)
        const precision = Math.abs(this.getMaxPrecision(val, rat))
        let result
        if (typeof val === 'number') {
          result =
            (((precisionFactor * val) - (precisionFactor * this.step * rat))
            / precisionFactor).toFixed(precision)
        } else {
          result = this.min === -Infinity ? -this.step : this.min
        }
        return this.toNumber(result)
      },

      setStep(type, e, ratio = 1) {
        if (e) {
          e.preventDefault()
        }
        if (this.disabled) {
          return
        }
        const value = this.getCurrentValidValue(this.inputValue)
        if (this.isNotCompleteNumber(value)) {
          return
        }
        const val = this[`${type}Step`](value, ratio)
        if (val > this.max || val < this.min) {
          return
        }
        this.setValue(val)
      },

      stop() {
        if (this.autoStepTimer) {
          clearTimeout(this.autoStepTimer)
        }
      },

      down(e, ratio, recursive) {
        this.stop()
        this.setStep('down', e, ratio)
        this.autoStepTimer = setTimeout(() => {
          this.down(e, ratio, true)
        }, recursive ? SPEED : DELAY)
      },

      up(e, ratio, recursive) {
        this.stop()
        this.setStep('up', e, ratio)
        this.autoStepTimer = setTimeout(() => {
          this.up(e, ratio, true)
        }, recursive ? SPEED : DELAY)
      },

      onKeyDown(e) {
        if (e.keyCode === 38) {
          const ratio = this.getRatio(e)
          this.up(e, ratio)
          this.stop()
        } else if (e.keyCode === 40) {
          const ratio = this.getRatio(e)
          this.down(e, ratio)
          this.stop()
        }
      },

      getRatio(e) {
        let ratio = 1
        if (e.metaKey || e.ctrlKey) {
          ratio = 0.1
        } else if (e.shiftKey) {
          ratio = 10
        }
        return ratio
      }
    },

    computed: {
      formatValue() {
        return this.formatter(this.inputValue)
      },

      classes() {
        const size = {
          large: 'lg',
          small: 'sm'
        }[this.size]
        return {
          [`ant-input-number-${size}`]: !!size,
          'ant-input-number-disabled': this.disabled,
          'ant-input-number-focused': !this.disabled && this.focused
        }
      },

      upCls() {
        return {
          'ant-input-number-handler-up-disabled': this.upStep(this.value, 1) > this.max
        }
      },

      downCls() {
        return {
          'ant-input-number-handler-down-disabled': this.downStep(this.value, 1) < this.min
        }
      },

      isEmptySlot() {
        return Object.keys(this.$slots).length === 0
      }
    }
  }
</script>
