<template lang="html">
  <li class="ant-menu-submenu"
      :class="classes">
    <div class="ant-menu-submenu-title" ref="submenu-title"
         :style="styles">
      <slot name="title"></slot>
    </div>
    <v-transition :type="transitionType">
      <ul class="ant-menu ant-menu-sub"
          :class="subCls"
          v-show="opened">
        <slot></slot>
      </ul>
    </v-transition>
  </li>
</template>

<script type="text/babel">
  import ENUM from './enum'
  import mixins from './mixins'

  export default {
    name: 'VSubMenu',
    mixins: [mixins],
    props: {
      index: {
        type: String,
        required: true
      },
      defaultOpened: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        store: {},
        mode: null,
        opened: false,
        selected: false,
        paddingLeft: null,
        timeout: null,
        transitionType: null
      }
    },
    watch: {
      paddingLeft() {
        if (this.mode === ENUM.MODE.INLINE) {
          const deepNodes = (nodes) => {
            nodes.forEach((node) => {
              if (node.$options.name === 'VMenuItem') {
                node.mode = this.mode
                node.paddingLeft = this.paddingLeft + 24
              } else if (node.$options.name === 'VMenuItemGroup') {
                node.paddingLeft += 32
              }
              deepNodes(node.$children)
            })
          }
          deepNodes(this.$children)
        }
      }
    },
    computed: {
      styles() {
        return { paddingLeft: `${this.paddingLeft}px` }
      },
      classes() {
        return [
          this.mode === ENUM.MODE.HORIZONTAL && this.$parent.$options.name === 'VSubMenu' ? 'ant-menu-submenu-vertical' : `ant-menu-submenu-${this.mode}`,
          {
            'ant-menu-submenu-open': this.opened,
            'ant-menu-submenu-selected': this.selected,
            'ant-menu-submenu-active': this.opened && this.mode === ENUM.MODE.HORIZONTAL && this.$parent.$options.name === 'VSubMenu'
          }
        ]
      },
      subCls() {
        return [this.mode === ENUM.MODE.HORIZONTAL ? 'ant-menu-vertical' : `ant-menu-${this.mode}`]
      }
    },
    methods: {
      onMouseEnter() {
        clearTimeout(this.timeout)
        this.store.commit('openMenu', { index: this.index, indexPath: this.indexPath })
      },
      onMouseLeave() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.store.commit('closeMenu', { index: this.index, indexPath: this.indexPath })
        }, 100)
      },
      onTitleClick() {
        this.store.commit(this.opened ? 'closeMenu' : 'openMenu', { index: this.index, indexPath: this.indexPath })
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this.mode === ENUM.MODE.HORIZONTAL) {
          this.$el.addEventListener('mouseenter', this.onMouseEnter)
          this.$el.addEventListener('mouseleave', this.onMouseLeave)
          this.transitionType = 'slide-up'
        } else {
          this.$refs['submenu-title'].addEventListener('click', this.onTitleClick)
          this.transitionType = 'collapse'
        }

        if (this.defaultOpened) {
          this.store.commit('openMenu', { index: this.index, indexPath: this.indexPath })
        }
      })
    }
  }
</script>
