<template>
  <section>
    <h2>Message 全局提示</h2>
    <v-button @click.native="info">Info</v-button>
    <v-button @click.native="success">Success</v-button>
    <v-button @click.native="error">Error</v-button>
    <v-button @click.native="warning">Warning</v-button>
    <v-button @click.native="loading">Loading</v-button>
    <v-button @click.native="destroy">Destroy</v-button>
  </section>
</template>
<script>
  export default {
    created() {
      this.$message.config({ top: 16, duration: 1500 })
    },

    methods: {
      info() {
        this.$message.info('This is a message of info', 0, (index) => {
          console.log(index)
        })
      },

      success() {
        this.$message.success('This is a message of success')
      },

      error() {
        this.$message.error('This is a message of error')
      },

      warning() {
        this.$message.warning('This is a message of warning')
      },

      loading() {
        this.$message.loading('This is a message of loading')
      },

      destroy() {
        this.$message.destroy()
      }
    }
  }
</script>
