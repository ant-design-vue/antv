import BaseStore from '../utils/base-store'

class Mutations {
}

class Store extends BaseStore {
  constructor(component, initialState = {}) {
    super(component, initialState)

    this.state = {
      value: null,
      disabled: false
    }

    this.setState(initialState)

    this.mutations = new Mutations()
  }
}

export default Store
