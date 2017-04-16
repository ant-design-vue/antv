<template>
  <section>
    <h2>Tabs 标签页</h2>
    <br>
    <br>
    <v-tabs v-model="activeIndex" size="small">
      <v-tab-pane :tab="tab1" index="1">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane :tab="tab2" index="2">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane tab="Tab 3" disabled index="3">Content of Tab Pane 3</v-tab-pane>
      <v-tab-pane tab="Tab 4" index="4">Content of Tab Pane 4</v-tab-pane>
      <v-tab-pane tab="Tab 5" index="5">Content of Tab Pane 5</v-tab-pane>
    </v-tabs>
    <br>
    <br>
    <v-tabs type="card" v-model="activeIndex2">
      <v-tab-pane :tab="tab1" index="1">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane :tab="tab2" index="2">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane tab="Tab 3" disabled index="3">Content of Tab Pane 3</v-tab-pane>
      <v-tab-pane tab="Tab 4" index="4">Content of Tab Pane 4</v-tab-pane>
      <v-tab-pane tab="Tab 5" index="5">Content of Tab Pane 5</v-tab-pane>
    </v-tabs>
    <br>
    <br>
    <v-tabs type="editable-card"
            v-model="activeIndex3"
            @onEdit="onEdit">
      <v-tab-pane
        v-for="pane in panes"
        :tab="pane.title"
        :key="pane.index"
        :index="pane.index"
        :closable="pane.closable">{{pane.content}}</v-tab-pane>
    </v-tabs>
  </section>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeIndex3: '1',
        tab1: (<span><v-icon type="apple"/>Tab 1</span>),
        tab2: (<span><v-icon type="android"/>Tab 2</span>),
        newTabIndex: 0,
        panes: [
          { title: 'Tab 1', content: 'Content of Tab 1', index: '1', closable: false },
          { title: 'Tab 2', content: 'Content of Tab 2', index: '2' }
        ]
      }
    },

    methods: {
      onEdit(targetIndex, action) {
        this[action](targetIndex)
      },

      add() {
        const activeIndex = `newTab${this.newTabIndex++}`
        this.panes.push({ title: 'New Tab', content: `Content of ${activeIndex}`, index: activeIndex })
        this.activeIndex3 = activeIndex
      },

      remove(targetIndex) {
        let lastIndex
        if (this.activeIndex3 === targetIndex) {
          lastIndex = this.panes.findIndex(pane => (pane.index === targetIndex)) - 1
          if (lastIndex === -1 && this.panes.length > 1) {
            lastIndex = 0
          }
        }
        this.panes = this.panes.filter(pane => pane.index !== targetIndex)
        if (lastIndex >= 0) {
          this.activeIndex3 = this.panes[lastIndex].index
        }
      }
    }
  }
</script>
