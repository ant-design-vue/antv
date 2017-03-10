module.exports = {
  computed: {
    indexPath() {
      let parent = this.$parent
      const path = [this.index]
      while (parent.$options.name !== 'VMenu') {
        if (parent.index) {
          path.unshift(parent.index)
        }
        parent = parent.$parent
      }
      return path
    }
  }
}
