<template>
  <section>
    <h2>Rate 评分</h2>
    <v-rate v-model="value1" />
    <br>
    <v-rate v-model="value2" allowHalf>
      <span className="ant-rate-text" v-if="value2 > 0">{{value2}} stars</span>
    </v-rate>
    <br>
    <v-rate v-model="value3" character="★" disabled /> <br>
    <v-rate v-model="value4" character="好" allowHalf />
  </section>
</template>
<script>
  export default {
    data() {
      return {
        value1: 1,
        value2: 1,
        value3: 1,
        value4: 1
      }
    },

    methods: {
      onChange() {
        console.log('close...')
      }
    }
  }
</script>
