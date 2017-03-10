<template>
  <section>
    <h2 style="margin-bottom: 100px">选择器</h2>
    <v-select
        style="width: 200px;"
        size="small"
        v-model="selectValue1"
        placeholder="请选择">
      <v-option-group title="xx">
        <v-option value="xx11">xx11</v-option>
        <v-option value="xx12">xx12</v-option>
      </v-option-group>
      <v-option value="xx1">xx1</v-option>
      <v-option value="xx2">xx2</v-option>
      <v-option value="xx3" :disabled="true">xx3</v-option>
    </v-select>
    <br>
    <br>
    <br>
    <v-select
        style="width: 200px;"
        placeholder="请选择"
        v-model="selectValue2">
      <v-option value="xx1">xx1</v-option>
      <v-option value="xx2">xx2</v-option>
    </v-select>
    <br>
    <br>
    <br>
    <v-select style="width: 200px;" size="large" :disabled="true">
      <v-option value="xx1">xx1</v-option>
      <v-option value="xx2">xx2</v-option>
    </v-select>
    <br>
    <br>
    <br>
    <v-select
        style="width: 200px;"
        :showSearch="true"
        v-model="selectValue1">
      <v-option value="xx1">xx1</v-option>
      <v-option value="xx2">xx2</v-option>
      <v-option value="xx3">xx3</v-option>
      <v-option value="xx4">xx4</v-option>
      <v-option value="xx5">xx5</v-option>
      <v-option value="xx6">xx6</v-option>
      <v-option value="xx7">xx7</v-option>
      <v-option value="xx8">xx8</v-option>
      <v-option value="xx9">xx9</v-option>
      <v-option value="xx10">xx10</v-option>
    </v-select>
    <br>
    <br>
    <br>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        selectValue1: 'xx2',
        selectValue2: ''
      }
    },
    watch: {
      selectValue1() {
        console.log(this.selectValue1)
      },
      selectValue2() {
        console.log(this.selectValue2)
      }
    },
    methods: {
      changeActive(e) {
        console.log(e)
      }
    }
  }
</script>
