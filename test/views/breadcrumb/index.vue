<template>
  <section>
    <h2>Breadcrumb 面包屑</h2>
    <br>
    <br>
    <v-breadcrumb separator="/">
      <v-breadcrumb-item :to="{ path: '/'}">
        <v-icon type="home" />
      </v-breadcrumb-item>
      <v-breadcrumb-item to="menu">
        <v-icon type="user" />
        <span>Application List</span>
      </v-breadcrumb-item>
      <v-breadcrumb-item>
        Application
      </v-breadcrumb-item>
    </v-breadcrumb>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        dot: true
      }
    },

    methods: {
      onClose() {
        console.log('close...')
      }
    }
  }
</script>
