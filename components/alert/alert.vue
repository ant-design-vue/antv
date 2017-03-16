<template>
  <v-transition type="slide-up" prefixCls="ant-alert">
    <div class="ant-alert"
         :class="classes"
         v-if="visible">
      <i class="anticon anticon-check-circle-o ant-alert-icon" v-if="currentShowIcon"></i>
      <span class="ant-alert-message">{{message}}</span><span class="ant-alert-description">{{description}}</span>
      <a class="ant-alert-close-icon"
         v-if="currentClosable"
         @click="onClose">
        {{closeText}}
      <i class="anticon anticon-cross" v-if="!closeText"></i>
      </a>
    </div>
  </v-transition>
</template>
<script>
  export default {
    name: 'VAlert',
    props: {
      type: {
        type: String,
        default: 'info'
      },
      message: String,
      description: String,
      closeText: String,
      closable: Boolean,
      showIcon: Boolean,
      banner: Boolean // 设置为true时，默认有图标，type 为 'warning'
    },

    data() {
      return {
        visible: true
      }
    },

    computed: {
      currentType() {
        return this.banner ? 'warning' : this.type
      },

      currentShowIcon() {
        return this.banner ? true : this.showIcon
      },

      currentClosable() {
        return this.closeText ? true : this.closable
      },

      classes() {
        return {
          [`ant-alert-${this.currentType}`]: !!this.currentType,
          'ant-alert-no-icon': !this.currentShowIcon,
          'ant-alert-banner': this.banner,
          'ant-alert-with-description': !!this.description
        }
      },

      iconCls() {
        const icon = {
          info: 'info',
          success: 'check',
          warning: 'exclamation',
          error: 'cross'
        }[this.type]
        return {
          [`antion-${icon}-circle${this.description ? '-o' : ''}`]: !!icon
        }
      }
    },

    methods: {
      onClose() {
        this.visible = false
        this.$emit('onClose')
      }
    }
  }
</script>
