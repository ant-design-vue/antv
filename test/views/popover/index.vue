<template>
  <section class="code-box-demo">
    <h2 style="margin-bottom: 100px">Popover</h2>
    <div>
      <v-popover title="title" :content="content">
        <span>Tooltip will show when mouse enter.（简单内容）</span>
      </v-popover>
    </div>
    <br>
    <br>
    <div>
      <v-popover title="title" content="content" trigger="focus">
        <v-button>Tooltip</v-button>
      </v-popover>
    </div>
    <br>
    <br>
    <div>
      <v-popover title="title">
        <span>Tooltip will show when mouse enter.（复杂内容，可以通过props传值也可以通过slot插入内容，优先使用props）</span>
        <div slot="title">title</div>
        <v-content slot="content"></v-content>
      </v-popover>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div>
      <div style="margin-left: 60px">
        <v-popover ref="popover" placement="topLeft" :title="text" @onVisibleChange="onVisibleChange">
          <a href="#">TL</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="top" :title="text" trigger="click">
          <a href="javascript:;">Top(click)</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="topRight" :title="text" trigger="focus">
          <a href="javascript:;">TR(focus)</a>
          <v-content slot="content"></v-content>
        </v-popover>
      </div>
      <div style="width: 60px; float: left;">
        <v-popover placement="leftTop" :title="text">
          <a href="#">LT</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="left" :title="text">
          <a href="#">Left</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="leftBottom" :title="text">
          <a href="#">LB</a>
          <v-content slot="content"></v-content>
        </v-popover>
      </div>
      <div style="width: 60px; margin-left: 270px;">
        <v-popover placement="rightTop" :title="text">
          <a href="#">RT</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="right" :title="text">
          <a href="#">Right</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="rightBottom" :title="text">
          <a href="#">RB</a>
          <v-content slot="content"></v-content>
        </v-popover>
      </div>
      <div style="margin-left: 60px; clear: both;">
        <v-popover placement="bottomLeft" :title="text">
          <a href="#">BL</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="bottom" :title="text">
          <a href="#">Bottom</a>
          <v-content slot="content"></v-content>
        </v-popover>
        <v-popover placement="bottomRight" :title="text">
          <a href="#">BR</a>
          <v-content slot="content"></v-content>
        </v-popover>
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
<script type="text/babel">
  export default {
    data() {
      return {
        text: 'prompt text',
        content: (<div>
          <p>Content</p>
          <p>Content</p>
        </div>)
      }
    },
    methods: {
      onVisibleChange(visible) {
        console.log(visible)
      }
    },
    mounted() {
//       todo: 通过实例化生成vnode
//       this.$refs.popover.$slots.content = [this.$refs.content.$vnode]
    },
    components: {
      VContent: {
        render(h, context) {
          return (
            <div slot="content">
              <p>Content</p>
              <p>Content</p>
            </div>)
        }
      }
    }
  }
</script>
