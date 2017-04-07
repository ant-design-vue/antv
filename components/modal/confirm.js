import Modal from './modal'

export default {
  props: {
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
    maskClosable: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 520
    },
    type: {
      type: String,
      default: 'confirm'
    },
    iconType: {
      type: String,
      default: 'question-circle'
    },
    okCancel: {
      type: Boolean,
      default: false
    },
    onOk: Function,
    onCancel: Function
  },

  data() {
    return {
      visible: false
    }
  },

  render() {
    const modalData = {
      ref: 'modal',
      props: {
        value: this.visible,
        title: null,
        closable: false,
        footer: null,
        wrapClassName: `ant-confirm ant-confirm-${this.type}`,
        ...this.$props
      },
      on: {
        onCancel: this.close.bind(this, 'cancel'),
        afterClose: this.afterClose
      }
    }

    return (<v-modal {...modalData}>
      <div class="ant-confirm-body-wrapper">
        <div class="ant-confirm-body">
          <v-icon type={this.iconType}/>
          <span class="ant-confirm-title">{this.title}</span>
          <div class="ant-confirm-content">{this.content}</div>
        </div>
        <div class="ant-confirm-btns">
          {this.okCancel ?
            <v-button size="large" nativeOn-click={this.close.bind(this, 'cancel')}>Cancel</v-button> : null}
          <v-button type="primary" size="large" nativeOn-click={this.close.bind(this, 'ok')}>Ok</v-button>
        </div>
      </div>
    </v-modal>)
  },

  mounted() {
    document.body.appendChild(this.$el)
    this.visible = true
  },

  methods: {
    close(type) {
      this.visible = false
      if (type === 'cancel' && this.onCancel) {
        this.onCancel()
      } else if (type === 'ok' && this.onOk) {
        this.onOk()
      }
    },

    afterClose() {
      document.body.removeChild(this.$el)
      this.$destroy()
    }
  },

  components: {
    Modal
  }
}
