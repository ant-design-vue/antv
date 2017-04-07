<template>
  <section>
    <h2>Modal 对话框</h2>
    <v-button type="primary" @click.native="showModal">Open a modal dialog</v-button>
    <v-modal
      v-model="visible1"
      title="Basic Modal"
      :confirmLoading="confirmLoading"
      @onOk="onOk"
      @onCancel="onCancel">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
    <br>
    <br>
    <v-button type="primary" @click.native="visible2 = !visible2">Open a modal dialog</v-button>
    <v-modal
      v-model="visible2"
      title="Basic Modal2"
      :closable="false"
      :footer="footer"
      :modalStyle="style"
      wrapClassName="vertical-center-modal"
      @onOk="visible2 = false"
      @onCancel="visible2 = false">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
    <br>
    <br>
    <br>
    <v-button type="primary" @click.native="showConfirm">confirmation modal dialog</v-button>
    <br>
    <br>
    <br>
    <v-button @click.native="showInfo">Info</v-button>
    <v-button @click.native="showSuccess">Success</v-button>
    <v-button @click.native="showError">Error</v-button>
    <v-button @click.native="showWarning">Warning</v-button>
  </section>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        footer: ([(<v-button
          size="large"
          nativeOn-click={this.onCancel2}
        >
          return
        </v-button>),
          (<v-button
            type="primary"
            size="large"
            nativeOn-click={this.onCancel2}
          >
            ok
          </v-button>)]),
        style: { top: '20px' },
        visible1: false,
        visible2: false,
        confirmLoading: false
      }
    },

    methods: {
      showModal() {
        this.visible1 = true
      },

      onOk(e) {
        this.confirmLoading = true
        setTimeout(() => {
          this.confirmLoading = false
          this.visible1 = false
        }, 2000)
      },

      onCancel(e) {
        this.visible1 = false
      },

      onCancel2(e) {
        this.visible2 = false
      },

      showConfirm() {
        this.$modal.confirm({
          title: 'Want to delete these items?',
          content: 'some descriptions',
          onOk() {
            console.log('OK')
          },
          onCancel() {
            console.log('Cancel')
          }
        })
      },

      showInfo() {
        this.$modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {
            console.log('OK')
          }
        })
      },

      showSuccess() {
        this.$modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...'
        })
      },

      showError() {
        this.$modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...'
        })
      },

      showWarning() {
        this.$modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...'
        })
      }
    }
  }
</script>
