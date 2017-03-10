<template>
  <div class="ant-select ant-select-enabled"
       v-clickoutside="hide"
       :class="selectCls"
       @keydown.enter.prevent="selectOption"
       @keydown.esc.prevent="onPressEsc"
       @keydown.down.prevent="changeActive('next')"
       @keydown.up.prevent="changeActive('prev')">
    <div class="ant-select-selection ant-select-selection--single" tabindex="0">
      <div class="ant-select-selection__rendered">
        <template v-if="!showSearch">
          <div class="ant-select-selection-selected-value" style="display: block; opacity: 1;"
               :title="currentValue || placeholder">
            {{ currentValue || placeholder }}
          </div>
        </template>
        <template v-else>
          <div unselectable="unselectable" class="ant-select-selection__placeholder"
               style="user-select: none;"
               v-show="!visible && currentValue === ''">{{ placeholder }}
          </div>
          <div class="ant-select-selection-selected-value"
               :style="{ opacity : (visible?0.4:1)}"
               :title="currentValue || placeholder"
               v-show="composition">
            {{ currentValue || placeholder }}
          </div>
          <div class="ant-select-search ant-select-search--inline" v-show="visible">
            <div class="ant-select-search__field__wrap">
              <input value="" class="ant-select-search__field"
                     ref="searchInput"
                     v-model="searchKey">
              <span class="ant-select-search__field__mirror"></span>
            </div>
          </div>
        </template>
      </div>
      <span class="ant-select-arrow" unselectable="unselectable" style="user-select: none;"><b></b></span></div>
    <v-transition type="slide-up">
      <div class="ant-select-dropdown"
           :class="placementCls"
           ref="dropdown"
           v-show="visible">
        <v-menu
            ref="menu"
            mode="inline"
            :prefixCls="prefixCls"
            @onSelect="onSelect"
            :activeIndex="activeIndex"
            :searchKey="searchKey"
            :defaultSelectedIndex="value">
          <slot></slot>
        </v-menu>
      </div>
    </v-transition>
  </div>
</template>

<style lang="less">
  @import "./style/index.less";
  @import "../input/style/index.less";

  .ant-select-dropdown {
    margin: 4px 0px;
  }
</style>

<script type="text/babel">
  import VMenu from '../menu'
  import Popper from '../mixins/popper'
  import Clickoutside from '../utils/clickoutside'

  export default {
    name: 'VSelect',
    mixins: [Popper],
    directives: { Clickoutside },
    props: {
      placement: {
        type: String,
        default: 'bottomLeft'
      },
      value: {
        type: [String, Number, Array],
        default: ''
      },
      size: String,
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showSearch: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        prefixCls: 'ant-select-dropdown',
        focused: false,
        currentValue: this.value,
        searchKey: '',
        compositionstart: false,
        activeIndex: -1,
        options: [],
        selectedOption: null
      }
    },
    computed: {
      sizeCls() {
        return {
          large: 'lg',
          small: 'sm'
        }[this.size]
      },
      selectCls() {
        return {
          [`ant-select-${this.sizeCls}`]: !!this.sizeCls,
          'ant-select-focused': this.focused,
          'ant-select-open': this.visible,
          'ant-select-disabled': this.disabled
        }
      },
      composition() {
        return !(this.compositionstart || this.searchKey !== '')
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },
      searchKey() {
        this.compositionstart = false
        let flag = true
        this.options.forEach((option) => {
          option.visible = option.index.indexOf(this.searchKey) > -1
          if (flag && option.visible) {
            this.activeIndex = option.activeIndex
            flag = false
          }
        })
      },
      visible() {
        this.$nextTick(() => {
          this.searchKey = ''
          if (this.visible && this.showSearch) {
            this.$refs.searchInput.focus()
          }
        })
        if (this.visible && this.selectedOption && this.selectedOption.visible) {
          this.activeIndex = this.selectedOption.activeIndex
        } else {
          this.activeIndex = 0
        }
      }
    },
    methods: {
      hide() {
        this.visible = false
        this.focused = false
      },
      toggle() {
        this.visible = !this.visible
      },
      onFocus() {
        this.$el.focus()
        this.focused = true
      },
      onPressEsc() {
        this.visible = false
        this.onFocus()
      },
      onSelect(val, option) {
        this.visible = false
        this.selectedOption = option
        this.currentValue = val
        this.$emit('onSelect', this.currentValue, option)
      },
      onCompositionstart() {
        this.compositionstart = true
      },
      selectOption() {
        this.onFocus()
        if (this.visible) {
          this.$refs.menu.store.commit('selectMenu', { index: this.options[this.activeIndex].index })
        } else {
          this.visible = true
        }
      },
      changeActive(direction) {
        if (!this.visible) return
        const options = this.options
        if (direction === 'next') {
          this.activeIndex += 1
          if (this.activeIndex === options.length) {
            this.activeIndex = 0
          }
          this.resetScrollTop()
          if (options[this.activeIndex].disabled === true
              || !options[this.activeIndex].visible) {
            this.changeActive('next')
            return
          }
        }
        if (direction === 'prev') {
          this.activeIndex -= 1
          if (this.activeIndex < 0) {
            this.activeIndex = options.length - 1
          }
          this.resetScrollTop()
          if (options[this.activeIndex].disabled === true
              || !options[this.activeIndex].visible) {
            this.changeActive('prev')
            return
          }
        }
      },
      resetScrollTop() {
        const optionsEl = this.$refs.menu.$el
        const optionEl = this.options[this.activeIndex].$el
        const bottomOverflowDistance = optionEl.getBoundingClientRect().bottom
            - optionsEl.getBoundingClientRect().bottom
        const topOverflowDistance = optionEl.getBoundingClientRect().top
            - optionsEl.getBoundingClientRect().top
        if (bottomOverflowDistance > 0) {
          optionsEl.scrollTop += bottomOverflowDistance
        }
        if (topOverflowDistance < 0) {
          optionsEl.scrollTop += topOverflowDistance
        }
      }
    },
    mounted() {
      if (this.disabled) return
      this.options = this.$refs.menu.menuItems

      this.popper = this.$refs.dropdown
      this.reference = this.$el
      this.popper.style.width = this.reference.style.width
      this.reference.addEventListener('click', this.toggle)
      this.reference.addEventListener('mousedown', this.onFocus)
      if (this.showSearch) {
        this.$refs.searchInput.addEventListener('compositionstart', this.onCompositionstart)
      }
    },
    components: {
      VMenu
    }
  }
</script>
