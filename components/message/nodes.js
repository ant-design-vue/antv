import VNode from './node'

let seed = 0
const now = Date.now()

function getUuid() {
  return `message_${now}_${seed++}`
}

export default {
  name: 'VNodes',

  data() {
    return {
      top: 24,
      nodes: [],
      visible: true
    }
  },

  methods: {
    add(node) {
      node.index = getUuid()
      if (this.nodes.some(n => n.index === node.index)) return
      this.nodes.push(node)
    },

    remove(index) {
      this.nodes = this.nodes.filter(node => node.index !== index)
    }
  },

  render() {
    const vnodes = this.nodes.map(node =>
      ((<v-node { ...{ props: node } } key={ node.index }></v-node>)))
    const vm = (<div class="ant-message" style={{ top: `${this.top}px` }}>
      <span>{vnodes}</span>
    </div>)
    return (this.visible ? vm : null)
  },

  components: {
    VNode
  }
}
