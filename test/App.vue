<template>
  <section>
    <v-row>
      <v-col :span="6">
        <v-menu
            :router="true"
            mode="inline"
            style="width: 240px;">
          <v-menu-item index="welcome">
            <span to="/welcome">Bee UI</span>
          </v-menu-item>
          <v-sub-menu index="2" :defaultOpened="true">
            <template slot="title">
              <span>Components</span>
            </template>
            <v-menu-item-group title="General">
              <v-menu-item index="button">
                <span to="/button">Button 按钮</span>
              </v-menu-item>
            </v-menu-item-group>
            <v-menu-item-group title="Layout">
              <v-menu-item index="grid">
                <span to="/grid">Grid 栅格</span>
              </v-menu-item>
            </v-menu-item-group>
            <v-menu-item-group title="Navigation">
              <v-menu-item index="menu">
                <span to="/menu">Menu 菜单</span>
              </v-menu-item>
              <v-menu-item index="dropdown">
                <span to="/dropdown">Dropdown 下拉菜单</span>
              </v-menu-item>

            </v-menu-item-group>
            <v-menu-item-group title="Data Entry">
              <v-menu-item index="input">
                <span to="/input">Input 输入框</span>
              </v-menu-item>
              <v-menu-item index="select">
                <span to="/select">Select 选择器</span>
              </v-menu-item>
            </v-menu-item-group>
            <v-menu-item-group title="Data Display">
              <v-menu-item index="collapse">
                <span to="/collapse">Collapse 折叠面板</span>
              </v-menu-item>
              <v-menu-item index="tooltip">
                <span to="/tooltip">Tooltip 文字提示</span>
              </v-menu-item>
              <v-menu-item index="popover">
                <span to="/popover">Popover 气泡卡片</span>
              </v-menu-item>
            </v-menu-item-group>
            <v-menu-item-group title="Feedback">
              <v-menu-item index="popconfirm">
                <span to="/popconfirm">Popconfirm 气泡确认框</span>
              </v-menu-item>
            </v-menu-item-group>
          </v-sub-menu>
        </v-menu>
      </v-col>
      <v-col :span="14">
        <router-view></router-view>
      </v-col>
    </v-row>
  </section>
</template>

<script>
</script>

<style>

</style>
