<template>
  <section>
    <h2>单选框</h2>
    <v-radio label="A" v-model="radio1"></v-radio>
    <v-radio label="B" v-model="radio1"></v-radio>
    <br>
    <br>
    <v-radio-group v-model="radio2">
      <v-radio label="A" v-model="radio2"></v-radio>
      <v-radio label="B" v-model="radio2"></v-radio>
    </v-radio-group>
    <v-radio-group v-model="radio3" disabled>
      <v-radio label="A" v-model="radio3"></v-radio>
      <v-radio label="B" v-model="radio3"></v-radio>
    </v-radio-group>
    <v-radio-group v-model="radio4">
      <v-radio-button label="A" v-model="radio4"></v-radio-button><v-radio-button label="B" v-model="radio4"></v-radio-button>
    </v-radio-group>
    <v-radio-group v-model="radio4" size="small">
      <v-radio-button label="A" v-model="radio4"></v-radio-button><v-radio-button label="B" v-model="radio4"></v-radio-button>
    </v-radio-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        radio1: 'A',
        radio2: 'A',
        radio3: 'A',
        radio4: 'A'
      }
    },
    watch: {
      radio2() {
        console.log(this.radio2)
      }
    }
  }
</script>
