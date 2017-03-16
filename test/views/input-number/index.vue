<template>
  <section>
    <h2>InputNumber 数字输入框</h2>
   <v-input-number v-model="input1" :step="1" @onChange="onChange">xxx</v-input-number>
   <v-input-number v-model="input2" :step="0.1" :min="1" :max="10">xxx</v-input-number>
   <v-input-number v-model="input3" :step="0.1" :min="1" :max="10" :formatter="formatter" @onChange="onChange">xxx</v-input-number>
    <br>
    <br>
    <br>
    <v-input-number v-model="input4" size="large" :step="1" @onChange="onChange">xxx</v-input-number>
    <v-input-number v-model="input4" :step="1" @onChange="onChange">xxx</v-input-number>
    <v-input-number v-model="input4" size="small" :step="1" @onChange="onChange" disabled>xxx</v-input-number>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        input1: 1,
        input2: 3,
        input3: 3,
        input4: 3
      }
    },
    methods: {
      formatter(value) {
        return `$ ${value}`
      },

      onChange(value) {
        console.log(value)
      }
    }
  }
</script>
