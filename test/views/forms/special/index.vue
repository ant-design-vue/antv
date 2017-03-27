<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'special form!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    color: #42b983;
  }
</style>
