class BaseStore {
  constructor(component) {
    if (!component) {
      throw new Error('component is required.')
    }
    this.component = component

    this.state = {}
  }

  setState(state) {
    this.state.injected = false // 标记store是否注入，为false时自动将store注入到所有子组件中

    Object.keys(state).forEach((prop) => {
      if ({}.hasOwnProperty.call(this.state, prop)) {
        this.state[prop] = state[prop]
      }
    })

    this.component.$nextTick(() => {
      if (!this.state.injected) this.reject()
    })
  }

  reject() {
    const deepNodes = (nodes) => {
      nodes.forEach((node) => {
        node.store = this
        deepNodes(node.$children)
      })
    }

    deepNodes(this.component.$children)
    this.state.injected = true
  }

  commit(name, ...args) {
    if (!this.state.injected) this.reject()
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, args)
    }
  }
}

export default BaseStore
