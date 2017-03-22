<template>
  <section>
    <h2>Badge 徽标数</h2>
    <br>
    <br>
    <v-badge :count="22">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge :count="0" showZero>
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-badge :count="100">
      <a href="#" class="head-example"></a>
    </v-badge>
    <br>
    <br>
    <v-badge dot>
      <v-icon type="notification" />
    </v-badge>
    <v-badge dot>
      <a href="#">Link something</a>
    </v-badge>
    <v-badge :dot="dot">
      <a href="#" class="head-example"></a>
    </v-badge>
    <v-switch v-model="dot"></v-switch>
    <br>
    <br>
    <v-badge :count="4"/>
    <br>
    <br>
    <v-badge status="success" text="Success"/>
    <br>
    <v-badge status="processing"/>
    <v-badge status="default"/>
    <v-badge status="error"/>
    <v-badge status="warning"/>
    <!--<v-badge count={109} style={{ backgroundColor: '#87d068' }} />-->
  </section>
</template>
<style>
  .ant-badge:not(.ant-badge-status) {
    margin-right: 16px;
  }

  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #eee;
    display: inline-block;
  }
</style>
<script>
  export default {
    data() {
      return {
        dot: true
      }
    },

    methods: {
      onClose() {
        console.log('close...')
      }
    }
  }
</script>
