import BaseStore from '../utils/base-store'

class Mutations {
  onTabClick(index) {
    this.state.activeIndex = index

    this.component.$emit('onTabClick', index)
    this.component.$emit('input', index)
  }
}

class Store extends BaseStore {
  constructor(component, initialState = {}) {
    super(component, initialState)

    this.state = { ...initialState }

    this.setState(initialState)

    this.mutations = new Mutations()
  }
}

export default Store
