<template>
  <section class="code-box-demo">
    <h2 style="margin-bottom: 100px">Tooltip文字提示</h2>
    <div>
      <v-tooltip :title="text">
        <span>Tooltip will show when mouse enter.</span>
      </v-tooltip>
    </div>
    <br>
    <br>
    <div>
      <div style="margin-left: 60px">
        <v-tooltip placement="topLeft" :title="text" @onVisibleChange="onVisibleChange">
          <a href="#">TL</a>
        </v-tooltip>
        <v-tooltip placement="top" :title="text" trigger="click">
          <a href="javascript:;">Top(click)</a>
        </v-tooltip>
        <v-tooltip placement="topRight" :title="text" trigger="focus">
          <a href="javascript:;">TR(focus)</a>
        </v-tooltip>
      </div>
      <div style="width: 60px; float: left;">
        <v-tooltip placement="leftTop" :title="text">
          <a href="#">LT</a>
        </v-tooltip>
        <v-tooltip placement="left" :title="text">
          <a href="#">Left</a>
        </v-tooltip>
        <v-tooltip placement="leftBottom" :title="text">
          <a href="#">LB</a>
        </v-tooltip>
      </div>
      <div style="width: 60px; margin-left: 270px;">
        <v-tooltip placement="rightTop" :title="text">
          <a href="#">RT</a>
        </v-tooltip>
        <v-tooltip placement="right" :title="text">
          <a href="#">Right</a>
        </v-tooltip>
        <v-tooltip placement="rightBottom" :title="text">
          <a href="#">RB</a>
        </v-tooltip>
      </div>
      <div style="margin-left: 60px; clear: both;">
        <v-tooltip placement="bottomLeft" :title="text">
          <a href="#">BL</a>
        </v-tooltip>
        <v-tooltip placement="bottom" :title="text">
          <a href="#">Bottom</a>
        </v-tooltip>
        <v-tooltip placement="bottomRight" :title="text">
          <a href="#">BR</a>
        </v-tooltip>
      </div>
    </div>
  </section>
</template>
<style>
  .code-box-demo a {
    display: inline-block;
    line-height: 32px;
    height: 32px;
    width: 70px;
    font-size: 14px;
    text-align: center;
    background: #f5f5f5;
    margin-right: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
  }
</style>
<script>
  export default {
    data() {
      return {
        text: 'prompt text'
      }
    },
    methods: {
      onVisibleChange(visible) {
        console.log(visible)
      }
    }
  }
</script>
