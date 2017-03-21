<template>
  <section>
    <h2>Notification 通知提醒框</h2>
    <v-button @click.native="info">Info</v-button>
    <v-button @click.native="success">Success</v-button>
    <v-button @click.native="error">Error</v-button>
    <v-button @click.native="warning">Warning</v-button>
    <v-button @click.native="destroy">Destroy</v-button>
  </section>
</template>
<script type="text/babel">
  export default {
    created() {
      this.$notification.config({ placement: 'bottomLeft', top: 24, bottom: 24, duration: 4500 })
    },

    methods: {
      info() {
        const h = this.$createElement
        this.$notification.info({
          message: h('p', { style: 'color: red' }, [h('h2', 'Notification Title')]),
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          duration: null,
          placement: 'topLeft',
          icon: h('v-icon'),
          onClose: (index) => {
            console.log(index)
          }
        })
      },

      success() {
        this.$notification.success({
          message: 'Notification Title',
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          placement: 'bottomRight'
        })
      },

      error() {
        this.$notification.error({
          message: 'Notification Title',
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          placement: 'topRight'
        })
      },

      warning() {
        this.$notification.warning({
          message: 'Notification Title',
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.'
        })
      },

      destroy() {
        this.$notification.destroy()
      }
    },

    components: {
      VIcon: {
        functional: true,

        render(h) {
          return (<span class="ant-notification-notice-icon">
            <i class="anticon anticon-smile-circle" style="color: rgb(16, 142, 233);"></i>
            </span>)
        }
      }
    }
  }
</script>
