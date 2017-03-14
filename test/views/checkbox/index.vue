<template>
  <section>
    <h2>多选框</h2>
    <v-checkbox v-model="checkbox1">checkbox</v-checkbox>
    <v-checkbox v-model="checkbox2" disabled>checkbox</v-checkbox>
    <v-checkbox-group v-model="checkbox3">
      <v-checkbox label="checkbox1"></v-checkbox>
      <v-checkbox label="checkbox2"></v-checkbox>
      <v-checkbox label="checkbox3"></v-checkbox>
    </v-checkbox-group>
    <br>
    <v-checkbox :indeterminate="indeterminate" v-model="checkAll" @onChange="onCheckAllChange">Check all</v-checkbox>
    <v-checkbox-group v-model="checkedList">
      <v-checkbox v-for="option in plainOptions" :label="option">{{option}}</v-checkbox>
    </v-checkbox-group>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        checkbox1: true,
        checkbox2: true,
        checkbox3: ['checkbox1'],
        checkbox4: ['checkbox1'],
        plainOptions: ['Apple', 'Pear', 'Orange'],
        checkedList: ['Apple'],
        checkAll: false
      }
    },
    methods: {
      onCheckAllChange(val) {
        this.checkedList = val ? this.plainOptions : []
      }
    },

    computed: {
      indeterminate() {
        const checkedCount = this.checkedList.length
        this.checkAll = checkedCount === this.plainOptions.length
        return checkedCount > 0 && checkedCount < this.plainOptions.length
      }
    }
  }
</script>
