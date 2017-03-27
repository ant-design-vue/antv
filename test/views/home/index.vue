<template>
  <div class="hello">
    <v-breadcrumb class="breadcrumb" autoRoute><span>面包屑：</span></v-breadcrumb>
    <template v-if="$route.name === 'home'">
      <h1>{{ msg }}</h1>
    </template>
    <router-view v-else></router-view>
  </div>
</template>
<style>
  .hello {
    padding: 24px 0px;
  }

  .breadcrumb {
    padding: 12px 0px;
  }
</style>
<script>
  export default {
    data() {
      return {
        msg: 'Welcome!'
      }
    },

    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
