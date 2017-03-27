<template>
    <span>
      <router-link class="ant-breadcrumb-link" :to="to" v-if="$router && to !== undefined">
        <slot></slot>
      </router-link>
      <span class="ant-breadcrumb-link" v-else>
        <slot></slot>
      </span>
      <span class="ant-breadcrumb-separator">{{separator}}</span>
    </span>
</template>
<script>
  export default {
    name: 'VBreadcrumbItem',

    props: {
      to: [String, Object]
    },

    computed: {
      separator() {
        return this.$parent.separator
      }
    }
  }
</script>
