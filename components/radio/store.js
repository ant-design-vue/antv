import BaseStore from '../utils/base-store'

class Store extends BaseStore {
  constructor(component, initialState = {}) {
    super(component, initialState)

    this.state = {
      value: null,
      disabled: false
    }

    this.setState(initialState)
  }
}

export default Store
