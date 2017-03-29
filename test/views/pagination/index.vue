<template>
  <section>
    <h2>Pagination 分页</h2>
    <br>
    <br>
    <v-pagination simple :total="50" @onChange="onChange"></v-pagination>
    <br>
    <br>
    <v-pagination :total="500" v-model="model1" @onChange="onChange"></v-pagination>
    <br>
    <br>
    <v-pagination showSizeChanger :total="500" v-model="model2" @onShowSizeChange="onShowSizeChange"></v-pagination>
    <br>
    <br>
    <v-pagination showQuickJumper :total="100" v-model="model3" @onChange="onChange"></v-pagination>
    <br>
    <br>
    <v-pagination size="small" :total="100" v-model="model4" @onChange="onChange"></v-pagination>
    <br>
    <v-pagination showSizeChanger showQuickJumper size="small" :total="100" v-model="model5" @onChange="onChange"></v-pagination>
    <br>
    <v-pagination size="small" :total="50" v-model="model6" :showTotal="showTotal" @onChange="onChange"></v-pagination>
    <br>
    <br>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        model1: 4,
        model2: 5,
        model3: 6,
        model4: 1,
        model5: 8,
        model6: 1
      }
    },

    methods: {
      onChange(page) {
        console.log(page)
      },

      onShowSizeChange(page, pageSize) {
        console.log(page, pageSize)
      },

      showTotal(total, range) {
        return `${range[0]}-${range[1]} of ${total} items`
      }
    }
  }
</script>
