<template>
  <section>
    <h2>菜单</h2>

    <ul class="ant-menu ant-menu-horizontal  ant-menu-light ant-menu-root" role="menu" aria-activedescendant=""
        tabindex="0">
      <li class="ant-menu-item" role="menuitem" aria-selected="false"><i class="anticon anticon-mail "></i>
        <!-- react-text: 2421 -->Navigation One<!-- /react-text --></li>
      <li class="ant-menu-item-disabled ant-menu-item" role="menuitem" aria-selected="false" aria-disabled="true"><i
        class="anticon anticon-appstore "></i><!-- react-text: 2424 -->Navigation Two<!-- /react-text --></li>
      <li class="ant-menu-submenu-horizontal ant-menu-submenu-selected ant-menu-submenu">
        <div class="ant-menu-submenu-title" aria-expanded="false" aria-owns="item_1479952647883_2$Menu"
             aria-haspopup="true"><span><i class="anticon anticon-setting "></i><!-- react-text: 2429 -->Navigation Three - Submenu
          <!-- /react-text --></span></div>
        <ul class="ant-menu ant-menu-vertical  ant-menu-sub ant-menu-hidden" role="menu" aria-activedescendant=""
            id="item_1479952647883_2$Menu">
          <li class=" ant-menu-item-group">
            <div class="ant-menu-item-group-title">Item 1</div>
            <ul class="ant-menu-item-group-list">
              <li class="ant-menu-item" role="menuitem" aria-selected="false">Option 1</li>
              <li class="ant-menu-item-selected ant-menu-item" role="menuitem" aria-selected="true">Option 2</li>
            </ul>
          </li>
          <li class=" ant-menu-item-group">
            <div class="ant-menu-item-group-title">Item 2</div>
            <ul class="ant-menu-item-group-list">
              <li class="ant-menu-item" role="menuitem" aria-selected="false">Option 3</li>
              <li class="ant-menu-item" role="menuitem" aria-selected="false">Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="ant-menu-item" role="menuitem" aria-selected="false"><a href="https://ant.design" target="_blank"
                                                                         rel="noopener noreferrer">Navigation Four -
        Link</a></li>
    </ul>

    <v-menu defaultSelectedIndex="item3:4:1" mode="horizontal">
      <v-menu-item index="item1">
        <v-icon type="mail"/>
        Navigation One
      </v-menu-item>
      <v-menu-item index="item2">
        <v-icon type="appstore"/>
        Navigation Two
      </v-menu-item>
      <v-sub-menu index="item3">
        <template slot="title">
          <span><v-icon type="setting"/>Navigation Three - Submenu</span>
        </template>
        <v-menu-item-group title="Item 1">
          <v-menu-item index="item3:1">
            option1
          </v-menu-item>
          <v-menu-item index="item3:2">
            option2
          </v-menu-item>
          <v-menu-item index="item3:3">
            option3
          </v-menu-item>
        </v-menu-item-group>
        <v-sub-menu index="item3:4">
          <template slot="title">
            <span>Submenu</span>
          </template>
          <v-menu-item index="item3:4:1">
            option1
          </v-menu-item>
          <v-menu-item index="item3:4:2">
            option2
          </v-menu-item>
          <v-menu-item index="item3:4:3">
            option3
          </v-menu-item>
        </v-sub-menu>
      </v-sub-menu>
      <v-menu-item index="item4">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </v-menu-item>
    </v-menu>
    <br><br>
    <v-menu
      mode="inline"
      style="width: 240px;"
      @onOpenChange="onOpenChange1"
      @onSelect="onSelect1">
      <v-menu-item index="0">
        <v-icon type="mail"/>
        Option 1
      </v-menu-item>
      <v-sub-menu index="sub1">
        <template slot="title">
          <v-icon type="mail"/>
          <span>Navigation One</span></span>
        </template>
        <v-menu-item-group title="Item 1">
          <v-menu-item index="1">Option 1</v-menu-item>
          <v-menu-item index="2">Option 2</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group title="Item 2">
          <v-menu-item index="3">Option 3</v-menu-item>
          <v-menu-item index="4">Option 4</v-menu-item>
        </v-menu-item-group>
      </v-sub-menu>
      <v-sub-menu index="sub2">
        <template slot="title">
          <span><v-icon type="appstore"/><span>Navigation Two</span></span>
        </template>
        <v-menu-item index="5">Option 5</v-menu-item>
        <v-menu-item index="6">Option 6</v-menu-item>
        <v-sub-menu index="sub3">
          <template slot="title">
            Submenu
          </template>
          <v-menu-item index="7">Option 7</v-menu-item>
          <v-menu-item index="8">Option 8</v-menu-item>
          <v-menu-item-group title="Item 1">
            <v-menu-item index="13">Option 13</v-menu-item>
            <v-menu-item index="24">Option 24</v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
      </v-sub-menu>
      <v-sub-menu index="sub4">
        <template slot="title">
          <span><v-icon type="setting"/><span>Navigation Three</span></span>
        </template>
        <v-menu-item index="9">Option 9</v-menu-item>
        <v-menu-item index="10">Option 10</v-menu-item>
        <v-menu-item index="11">Option 11</v-menu-item>
        <v-menu-item index="12">Option 12</v-menu-item>
      </v-sub-menu>
    </v-menu>
    <br><br>
    <v-menu
      mode="inline"
      :uniqueOpened="true"
      style="width: 240px;"
      @onOpenChange="onOpenChange2">
      <v-menu-item index="0">
        <v-icon type="mail"/>
        Option 1
      </v-menu-item>
      <v-sub-menu index="sub1">
        <template slot="title">
          <v-icon type="mail"/>
          <span>Navigation One</span></span>
        </template>
        <v-menu-item-group title="Item 1">
          <v-menu-item index="1">Option 1</v-menu-item>
          <v-menu-item index="2">Option 2</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group title="Item 2">
          <v-menu-item index="3">Option 3</v-menu-item>
          <v-menu-item index="4">Option 4</v-menu-item>
        </v-menu-item-group>
      </v-sub-menu>
      <v-sub-menu index="sub2">
        <template slot="title">
          <span><v-icon type="appstore"/><span>Navigation Two</span></span>
        </template>
        <v-menu-item index="5">Option 5</v-menu-item>
        <v-menu-item index="6">Option 6</v-menu-item>
        <v-sub-menu index="sub3">
          <template slot="title">
            Submenu
          </template>
          <v-menu-item index="7">Option 7</v-menu-item>
          <v-menu-item index="8">Option 8</v-menu-item>
        </v-sub-menu>
      </v-sub-menu>
      <v-sub-menu index="sub4">
        <template slot="title">
          <span><v-icon type="setting"/><span>Navigation Three</span></span>
        </template>
        <v-menu-item index="9">Option 9</v-menu-item>
        <v-menu-item index="10">Option 10</v-menu-item>
        <v-menu-item index="11">Option 11</v-menu-item>
        <v-menu-item index="12">Option 12</v-menu-item>
      </v-sub-menu>
    </v-menu>

    <br><br>
    <br><br>
    <br><br>
    <br><br>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false,
        data: 'xx'
      }
    },
    methods: {
      toLoading() {
        this.loading = true
      },
      toLoading2() {
        this.loading2 = true
      },
      onOpenChange1(openIndexs) {
        console.log(openIndexs)
      },
      onOpenChange2(openIndexs) {
        console.log(openIndexs)
      },
      onSelect1(item, selectedIndex) {
        console.log(item, selectedIndex)
      }
    }
  }
</script>
