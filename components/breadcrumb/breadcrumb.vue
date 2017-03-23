<template>
  <div class="ant-breadcrumb">
    <slot></slot>
    <template v-if="autoRoute">
      <v-breadcrumb-item v-for="route in routes" :to="route" :key="route.name">
        {{route.name}}
      </v-breadcrumb-item>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'VBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      autoRoute: Boolean // 设置为ture会自动根据$route生成面包屑
    },

    computed: {
      routes() {
        return (this.autoRoute && this.$route && this.$route.matched) || []
      }
    }
  }
</script>
