import BaseStore from '../utils/base-store'

class Mutations {
  openPanel({ index }) {
    if (this.state.activeIndexs.indexOf(index) > -1) return
    if (this.state.accordion) {
      this.state.activeIndexs = [index]
    } else {
      this.state.activeIndexs.push(index)
    }
    this.mutations.activeChange.call(this)
  }

  closePanel({ index }) {
    const i = this.state.activeIndexs.indexOf(index)
    if (i > -1) {
      this.state.activeIndexs.splice(i, 1)
      this.mutations.activeChange.call(this)
    }
  }

  activeChange() {
    this.component.$children.forEach((node) => {
      node.active = this.state.activeIndexs.indexOf(node.index) > -1
    })
    this.component.$emit('onChange', this.state.activeIndexs)
  }
}

class Store extends BaseStore {
  constructor(component, initialState = {}) {
    super(component, initialState)

    this.state = {
      activeIndexs: [],
      accordion: false
    }
    this.setState(initialState)

    this.mutations = new Mutations()
  }
}

export default Store
