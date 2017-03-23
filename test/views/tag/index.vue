<template>
  <section>
    <h2>Tag 标签</h2>
    <br>
    <br>
    <v-tag>标签1</v-tag>
    <v-tag closable color="pink">标签2</v-tag>
    <v-tag closable color="pink-inverse">标签2</v-tag>
    <v-tag closable color="#f50">标签2</v-tag>
    <v-tag closable @onClose="onClose">Prevent Default</v-tag>
    <br>
    <br>
    <v-tag v-for="(tag, index) in tags" :key="tag" :closable="index !== 0" @afterClose="afterClose(tag)">{{tag}}</v-tag>
    <v-input
      ref="input"
      type="text"
      size="small"
      style="width: 78px"
      v-model="inputValue"
      v-show="inputVisible"
      @onBlur="inputConfirm"/>
    <v-button
      size="small"
      type="dashed"
      v-show="!inputVisible" @click.native="showInput">+ New Tag
    </v-button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputValue: '',
        inputVisible: false
      }
    },

    methods: {
      onClose(e) {
        e.preventDefault()
      },

      afterClose(tag) {
        this.tags = this.tags.filter(t => t !== tag)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(() => {
          this.$refs.input.$refs.input.focus()
        })
      },

      inputConfirm() {
        this.inputVisible = false
        const inputValue = this.inputValue
        if (inputValue && this.tags.indexOf(inputValue) === -1) {
          this.tags.push(this.inputValue)
        }
        this.inputValue = ''
      }
    }
  }
</script>
