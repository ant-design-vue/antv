import BaseStore from '../utils/base-store'

class Mutations {
  openMenu({ index, indexPath = [] }) {
    if (this.state.openIndexs.indexOf(index) > -1) return
    if (this.state.uniqueOpened) {
      this.state.openIndexs = [].concat(indexPath)
    } else {
      this.state.openIndexs.push(index)
    }
    this.mutations.openChange.call(this)
  }

  closeMenu({ index }) {
    const i = this.state.openIndexs.indexOf(index)
    if (i > -1) {
      this.state.openIndexs.splice(i, 1)
      this.mutations.openChange.call(this)
    }
  }

  selectMenu({ index }) {
    this.state.selectedIndex = index

    let item
    const deepNodes = (nodes) => {
      nodes.forEach((node) => {
        if (node.$options.name === 'VMenuItem') {
          node.selected = node.index === this.state.selectedIndex
          if (node.selected) item = node
        } else if (node.$options.name === 'VSubMenu') {
          let selected = false
          const deepNode = (childNodes) => {
            childNodes.forEach((childNode) => {
              if (childNode.$options.name === 'VMenuItem') {
                childNode.selected = childNode.index === this.state.selectedIndex
                if (childNode.selected) selected = true
              } else {
                deepNode(childNode.$children)
              }
            })
          }
          deepNode(node.$children)
          node.selected = selected
          deepNodes(node.$children)
        } else {
          deepNodes(node.$children)
        }
      })
    }

    deepNodes(this.component.$children)
    if (item) {
      if (this.state.router) this.component.$router.push(this.state.selectedIndex)
      this.component.$emit('onSelect', this.state.selectedIndex, item)
    }
  }

  openChange() {
    const deepNodes = (nodes) => {
      nodes.forEach((node) => {
        if (node.$options.name === 'VSubMenu') {
          node.opened = this.state.openIndexs.indexOf(node.index) > -1
        }
        deepNodes(node.$children)
      })
    }
    deepNodes(this.component.$children)
    this.component.$emit('onOpenChange', this.state.openIndexs)
  }
}

class Store extends BaseStore {
  constructor(component, initialState = {}) {
    super(component, initialState)

    this.state = {
      ENUM_MODE: {
        VERTICAL: 'vertical',
        HORIZONTAL: 'horizontal',
        INLINE: 'inline'
      },
      uniqueOpened: false,
      openIndexs: [],
      selectedIndex: '',
      router: false
    }
    this.setState(initialState)

    this.mutations = new Mutations()
  }
}

export default Store
