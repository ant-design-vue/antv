<template>
  <div data-reactroot="" v-show="visible">
    <div class="ant-modal-mask"></div>
    <div tabindex="-1" class="ant-modal-wrap " role="dialog" aria-labelledby="rcDialogTitle0">
      <div role="document" class="ant-modal" style="width: 520px; transform-origin: -42px 58px 0px;">
        <div class="ant-modal-content">
          <button aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x"></span></button>
          <div class="ant-modal-header">
            <div class="ant-modal-title" id="rcDialogTitle0">{{ title }}</div>
          </div>
          <div class="ant-modal-body"><slot></slot></div>
          <div class="ant-modal-footer">
            <button type="button" class="ant-btn ant-btn-lg"><span>Cancel</span></button>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-lg"><span>OK</span></button>
          </div>
        </div>
        <div tabindex="0" style="width: 0px; height: 0px; overflow: hidden;">sentinel</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VModal',
    props: {
      title: String,
      value: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      visible() {
        return this.value
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
          [`anticon-${icon}-circle${this.description ? '-o' : ''}`]: !!icon
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
