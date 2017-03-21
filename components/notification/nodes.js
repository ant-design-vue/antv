import VNode from './node'

let seed = 0
const now = Date.now()

function getUuid() {
  return `notification_${now}_${seed++}`
}

export default {
  name: 'VNodes',

  data() {
    return {
      top: 24,
      bottom: 24,
      placement: 'topRight',
      nodes: [],
      visible: true
    }
  },

  methods: {
    add(node) {
      this.placement = node.placement
      node.index = getUuid()
      if (this.nodes.some(n => n.index === node.index)) return
      this.nodes.push(node)
    },

    remove(index) {
      this.nodes = this.nodes.filter(node => node.index !== index)
    }
  },

  computed: {
    /**
     * 将placement转换为页面上四个角的位置
     * @returns {*}
     */
    getPlacementStyle() {
      let style
      switch (this.placement) {
        case 'topLeft':
          style = {
            left: 0,
            top: `${this.top}px`,
            bottom: 'auto'
          }
          break
        case 'bottomLeft':
          style = {
            left: 0,
            top: 'auto',
            bottom: `${this.bottom}px`
          }
          break
        case 'bottomRight':
          style = {
            right: 0,
            top: 'auto',
            bottom: `${this.bottom}px`
          }
          break
        default:
          style = {
            right: 0,
            top: `${this.top}px`,
            bottom: 'auto'
          }
      }
      return style
    },

    vdata() {
      return {
        class: [`ant-notification-${this.placement}`],
        style: this.getPlacementStyle
      }
    }
  },

  render() {
    // 每个node增加key属性，每次nodes数据变化时强制替换组件，避免vue重复使用组件导致组件内使用setTimeout时引用错误
    const vnodes = this.nodes.map(node =>
      ((<v-node { ...{ props: node } } key={ node.index }></v-node>)))
    const vm = (
      <div class="ant-notification" { ...this.vdata }>
        <span>{vnodes}</span>
      </div>)
    return (this.visible ? vm : null)
  },

  components: {
    VNode
  }
}
