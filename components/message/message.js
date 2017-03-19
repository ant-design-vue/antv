import Vue from 'vue'

import VNodes from './nodes'

const VMessage = Vue.extend(VNodes)

let instance
let defaultDuration = 1500 // 自动关闭延时
let defaultTop = 16 // 消息距离顶部的位置

function getInstance() {
  if (instance) return instance
  const message = new VMessage()
  message.top = defaultTop
  instance = message.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

class Message {
  static info(content, duration = defaultDuration, onClose) {
    getInstance().add({ type: 'info', content, duration, onClose })
  }

  static success(content, duration = defaultDuration, onClose) {
    getInstance().add({ type: 'success', content, duration, onClose })
  }

  static error(content, duration = defaultDuration, onClose) {
    getInstance().add({ type: 'error', content, duration, onClose })
  }

  static warning(content, duration = defaultDuration, onClose) {
    getInstance().add({ type: 'warning', content, duration, onClose })
  }

  static loading(content, duration = defaultDuration, onClose) {
    getInstance().add({ type: 'loading', content, duration, onClose })
  }

  static config({ duration = defaultDuration, top = defaultTop }) {
    defaultTop = top
    defaultDuration = duration
    if (instance) instance.top = defaultTop
  }

  static destroy() {
    if (instance) {
      instance.visible = false
      instance.$nextTick(() => {
        instance.$destroy()
        instance = null
      })
    }
  }
}

export default Message
