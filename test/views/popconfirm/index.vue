<template>
  <section class="code-box-demo">
    <h2 style="margin-bottom: 100px">Popconfirm 气泡确认框</h2>
    <div>
      <v-popconfirm :title="text" @onConfirm="onConfirm" @onCancel="onCancel">
        <span>Tooltip will show when mouse enter.</span>
      </v-popconfirm>
    </div>
    <br>
    <br>
    <div>
      <div style="margin-left: 60px">
        <v-popconfirm placement="topLeft" :title="text" @onVisibleChange="onVisibleChange">
          <v-button class="ant-btn">TL</v-button>
        </v-popconfirm>
        <v-popconfirm placement="top" :title="text">
          <v-button class="ant-btn">Top</v-button>
        </v-popconfirm>
        <v-popconfirm placement="topRight" :title="text" trigger="focus">
          <v-button class="ant-btn">TR(focus)</v-button>
        </v-popconfirm>
      </div>
      <div style="width: 60px; float: left;">
        <v-popconfirm placement="leftTop" :title="text">
          <v-button class="ant-btn">LT</v-button>
        </v-popconfirm>
        <v-popconfirm placement="left" :title="text">
          <v-button class="ant-btn">Left</v-button>
        </v-popconfirm>
        <v-popconfirm placement="leftBottom" :title="text">
          <v-button class="ant-btn">LB</v-button>
        </v-popconfirm>
      </div>
      <div style="width: 60px; margin-left: 270px;">
        <v-popconfirm placement="rightTop" :title="text">
          <v-button class="ant-btn">RT</v-button>
        </v-popconfirm>
        <v-popconfirm placement="right" :title="text">
          <v-button class="ant-btn">Right</v-button>
        </v-popconfirm>
        <v-popconfirm placement="rightBottom" :title="text">
          <v-button class="ant-btn">RB</v-button>
        </v-popconfirm>
      </div>
      <div style="margin-left: 60px; clear: both;">
        <v-popconfirm placement="bottomLeft" :title="text">
          <v-button class="ant-btn">BL</v-button>
        </v-popconfirm>
        <v-popconfirm placement="bottom" :title="text">
          <v-button class="ant-btn">Bottom</v-button>
        </v-popconfirm>
        <v-popconfirm placement="bottomRight" :title="text">
          <v-button class="ant-btn">BR</v-button>
        </v-popconfirm>
      </div>
    </div>
  </section>
</template>
<style>
  .code-box-demo .ant-popover-wrap > a {
    margin-right: 8px;
  }
  .code-box-demo .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
<script>
  export default {
    data() {
      return {
        text: 'Are you sure delete this task?'
      }
    },
    methods: {
      onVisibleChange(visible) {
        console.log(visible)
      },

      onConfirm() {
        console.log('onConfirm...')
      },

      onCancel() {
        console.log('onCancel...')
      }
    }
  }
</script>
