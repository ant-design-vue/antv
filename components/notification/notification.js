import Vue from 'vue'

import VNodes from './nodes'

const VNotification = Vue.extend(VNodes)

let instance
let instancePool = [] // 保持生成的实例用于destroy
let defaultDuration = 4.5 // 自动关闭延时
let defaultTop = 24 // 消息距离顶部的位置
let defaultBottom = 24 // 消息距离底部的位置
let defaultPlacement = 'topRight' // 弹出位置，可选 topLeft topRight bottomLeft bottomRight
const noop = () => {
}

function getInstance() {
  if (instance) return instance
  const notification = new VNotification()
  notification.top = defaultTop
  notification.bottom = defaultBottom
  notification.placement = defaultPlacement
  instance = notification.$mount()
  instancePool.push(instance)
  document.body.appendChild(instance.$el)
  return instance
}

class Notification {
  static config({
                  top = defaultTop,
                  bottom = defaultBottom,
                  placement = defaultPlacement,
                  duration = defaultDuration
                }) {
    // 对比新旧实例的配置，配置改变了需删除旧的
    if (instance &&
      (instance.top !== top || instance.bottom !== bottom || instance.placement !== placement)) {
      instance = null
    }
    defaultTop = top
    defaultBottom = bottom
    defaultPlacement = placement
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

['open', 'info', 'success', 'error', 'warning'].forEach((type) => {
  Notification[type] = ({
                          icon,
                          message,
                          description,
                          duration = defaultDuration,
                          placement = defaultPlacement,
                          onClose = noop
                        }) => {
    // 若旧实例的位置和新实例的位置不同，需删除旧的
    if (instance && instance.placement !== placement) {
      instance = null
    }
    getInstance().add({ type, icon, message, description, duration, placement, onClose })
  }
})

export default Notification
