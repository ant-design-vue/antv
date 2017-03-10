<template>
  <div class="sidebar">
    <router-link :to="{name: 'topics'}">Go to topics</router-link>
    <router-link :to="{name: 'general'}">Go to general</router-link>
    <router-link :to="{name: 'special'}">Go to special</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar a{
    color: #42b983;
  }
</style>
