class BaseStore {
  constructor(component) {
    if (!component) {
      throw new Error('component is required.')
    }
    this.component = component

    this.state = {}
  }

  setState(state) {
    Object.keys(state).forEach((prop) => {
      if ({}.hasOwnProperty.call(this.state, prop)) {
        this.state[prop] = state[prop]
      }
    })
  }

  commit(name, ...args) {
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, args)
    }
  }
}

export default BaseStore
