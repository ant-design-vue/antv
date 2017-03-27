<template>
  <section>
    <h2>Card 卡片</h2>
    <br>
    <br>
    <v-card title="Card title" style="width: 300px">
      <a slot="extra" href="#">More</a>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </v-card>
    <br>
    <br>
    <div style="background: #ECECEC; padding: 30px">
      <v-card title="Card title" :bordered="false" style="width: 300px">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </v-card>
    </div>
    <br>
    <v-card style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </v-card>
    <br>
    <v-card style="width: 240px" :bodyStyle="{ padding: 0 }">
      <div class="custom-image">
        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
      </div>
      <div class="custom-card">
        <h3>Europe Street beat</h3>
        <p>www.instagram.com</p>
      </div>
    </v-card>
    <br/>
    <div style="background: #ECECEC; padding: 30px">
      <v-row>
        <v-col :span="8">
          <v-card title="Card title" :bordered="false">Card content</v-card>
        </v-col>
        <v-col :span="8">
          <v-card title="Card title" :bordered="false">Card content</v-card>
        </v-col>
        <v-col :span="8">
          <v-card title="Card title" :bordered="false">Card content</v-card>
        </v-col>
      </v-row>
    </div>
    <br>
    <v-card style="width: 300px" title="Card title" :loading="!content">{{content}}</v-card>
  </section>
</template>
<style>
  .custom-image img {
    display: block;
  }

  .custom-card {
    padding: 10px 16px;
  }

  .custom-card p {
    color: #999;
  }

  .ant-row {
    margin-left: -8px;
    margin-right: -8px;
  }

  .ant-row > div {
    padding: 0 8px;
  }
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        content: ''
      }
    },

    mounted() {
      setTimeout(() => (this.content = 'Card content'), 2000)
    }
  }
</script>
