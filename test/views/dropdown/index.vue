<template>
  <section>
    <h2 style="margin-bottom: 100px">下拉菜单</h2>
    <v-row>
      <v-col :span="12">
        <v-dropdown>
          <a className="ant-dropdown-link" href="javascript:;" slot="title">
            Cascading menu
            <v-icon type="down"/>
          </a>
          <v-dropdown-menu slot="menu" @onSelect="onSelect1">
            <v-dropdown-item index="1"><a>1st menu item</a></v-dropdown-item>
            <v-dropdown-item index="2"><a>1st menu item</a></v-dropdown-item>
            <v-dropdown-item index="3"><a>1st menu item</a></v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown>
      </v-col>

      <v-col :span="12">
        <v-dropdown trigger="click">
          <a className="ant-dropdown-link" href="javascript:;" slot="title">
            Cascading menu
            <v-icon type="down"/>
          </a>
          <v-dropdown-menu slot="menu">
            <v-dropdown-item index="1"><a>1st menu item</a></v-dropdown-item>
            <v-dropdown-item index="2"><a>1st menu item</a></v-dropdown-item>
            <v-dropdown-item index="3"><a>1st menu item</a></v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false
      }
    },
    methods: {
      onSelect1(item, selectedIndex) {
        console.log(item, selectedIndex)
      }
    }
  }
</script>
