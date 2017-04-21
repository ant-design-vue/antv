import Vue from 'vue'

import VNodes from './nodes'

const VMessage = Vue.extend(VNodes)

let instance
let instancePool = [] // 保持生成的实例用于destroy
let defaultDuration = 1.5 // 自动关闭延时
let defaultTop = 16 // 消息距离顶部的位置
const noop = () => {
}

function getInstance() {
  if (instance) return instance
  const message = new VMessage()
  message.top = defaultTop
  instance = message.$mount()
  instancePool.push(instance)
  document.body.appendChild(instance.$el)
  return instance
}

class Message {
  static config({ top = defaultTop, duration = defaultDuration }) {
    // 对比新旧实例的配置，配置改变了需删除旧的
    if (instance && instance.top !== top) {
      instance = null
    }
    defaultTop = top
    defaultDuration = duration
  }

  static destroy() {
    if (instancePool.length) {
      instancePool.forEach((_instance) => {
        _instance.visible = false
        _instance.$nextTick(() => {
          _instance.$destroy()
          _instance = null
        })
      })
      instance = null
      instancePool = []
    }
  }
}

['info', 'success', 'error', 'warning', 'loading'].forEach((type) => {
  Message[type] = (content, duration = defaultDuration, onClose = noop) => {
    getInstance().add({ type, content, duration, onClose })
  }
})


export default Message
