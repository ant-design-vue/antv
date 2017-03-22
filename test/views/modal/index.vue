<template>
  <section>
    <h2>Modal 对话框</h2>
    <v-button type="primary" @click.native="visible1 = true">Open a modal dialog</v-button>
    <v-modal v-model="visible1" title="Basic Modal">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
    <br>
    <br>
    <br>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        visible1: false
      }
    },

    methods: {
      showModal() {
        this.visible1 = true
      }
    }
  }
</script>
