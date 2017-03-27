<template>
  <span class="ant-badge" :title="count" :class="wrapperCls">
    <slot></slot>
    <v-transition
      v-if="!status"
      type="zoom"
      prefixCls="ant-badge">
      <sup class="ant-scroll-number"
           :class="numberCls"
           v-show="visible">
          <span class="ant-scroll-number-only" v-show="!dot"><p>{{displayCount}}</p></span>
      </sup>
    </v-transition>
    <template v-else>
      <span class="ant-badge-status-dot" :class="`ant-badge-status-${status}`"></span>
      <span class="ant-badge-status-text">{{text}}</span>
    </template>
  </span>
</template>
<script>
  export default {
    name: 'VBadge',

    props: {
      count: Number,
      dot: {
        type: Boolean,
        default: false
      },
      showZero: {
        type: Boolean,
        default: false
      },
      overflowCount: {
        type: Number,
        default: 99
      },
      status: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        displayDot: this.dot
      }
    },

    watch: {
      dot() {
        if (this.dot) {
          this.displayDot = this.dot
        }
      }
    },

    computed: {
      visible() {
        return this.dot || this.showZero || this.count > 0
      },

      displayCount() {
        return this.count > this.overflowCount ? `${this.overflowCount}+` : this.count
      },

      wrapperCls() {
        return {
          'ant-badge-status ant-badge-not-a-wrapper': !!this.status
        }
      },

      numberCls() {
        return {
          'ant-badge-dot': this.displayDot,
          'ant-badge-count': !this.dot && this.visible
        }
      }
    }
  }
</script>
