<template>
  <div class="markdown global">
    <h2>栅格</h2>
    <v-row class="demo-row">
      <v-col class="demo-col demo-col-1" :span="0">
        100%
      </v-col>
    </v-row>
    <v-row class="demo-row">
      <v-col class="demo-col demo-col-2" :span="6">25%</v-col>
      <v-col class="demo-col demo-col-3" :span="6">25%</v-col>
      <v-col class="demo-col demo-col-2" :span="6">25%</v-col>
      <v-col class="demo-col demo-col-3" :span="6">25%</v-col>
    </v-row>

    <v-row class="demo-row">
      <v-col class="demo-col demo-col-2" :span="8">33.33%</v-col>
      <v-col class="demo-col demo-col-3" :span="8">33.33%</v-col>
      <v-col class="demo-col demo-col-2" :span="8">33.33%</v-col>
    </v-row>

    <v-row class="demo-row" :gutter="16">
      <v-col class="demo-col" :span="6"><div class="demo-col-2">col-6</div></v-col>
      <v-col class="demo-col" :span="6"><div class="demo-col-3">col-6</div></v-col>
      <v-col class="demo-col" :span="6"><div class="demo-col-2">col-6</div></v-col>
      <v-col class="demo-col" :span="6"><div class="demo-col-3">col-6</div></v-col>
    </v-row>
  </div>
</template>
<script>
</script>
<style lang="less">
  .global {

  .code-box:hover {
    box-shadow: none;
  }

  .highlight pre code {
    background: #f7f7f7;
  }

  .ant-row .paragraph-14px {
    font-size: 14px;
  }

  .ant-row .paragraph-12px {
    font-size: 12px;
  }

  .demo-row {
    margin-bottom: 20px;
  }

  .demo-ant-row-col .ant-row,
  .demo-row {
    background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    overflow: hidden;
  }

  .row-flex {
    background: #F5F5F5;
  }

  .demo-ant-row-col .ant-row div,
  .demo-row div,
  .row-flex div {
    padding: 5px 0;
    background: rgba(24, 115, 216, 0.7);
    text-align: center;
    min-height: 28px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
  }

  .demo-row .demo-col {
    text-align: center;
    padding: 40px 0;
    color: #fff;
    font-size: 18px;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
  }

  .demo-row .demo-col-1 {
    background: rgba(0, 160, 233, .7);
  }

  .demo-row .demo-col-2 {
    background: rgba(0, 160, 233, .5);
  }

  .demo-row .demo-col-3 {
    background: hsla(0, 0%, 100%, .2);
    color: #999;
  }

  .demo-row .demo-col-4 {
    background: rgba(24, 115, 216, 0.6);
  }

  .demo-row .demo-col-5 {
    background: rgba(255, 255, 255, 0.5);
    color: #999;
  }

  .hight-100 {
    height: 100px;
  }

  .hight-50 {
    height: 50px;
  }

  .hight-120 {
    height: 120px;
  }

  .hight-80 {
    height: 80px;
  }

  .testRowClassName {
    background: #f0f0f0;
  }

  div.testColClassName {
    background: rgba(24, 115, 216, 0.9);
  }

  }
</style>
