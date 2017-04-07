import Vue from 'vue'

import '../style/index.less'
import './style/index.less'

// style dependencies
import '../button/style/index.less'


import Modal from './modal'
import Confirm from './confirm'

const VConfirm = Vue.extend(Confirm)

function getInstance(props) {
  const confirm = new VConfirm()
  Object.assign(confirm, props)
  return confirm.$mount()
}

Modal.confirm = function (props = {}) {
  props.okCancel = true
  return getInstance(props)
}

Modal.info = function (props = {}) {
  props.type = 'info'
  props.iconType = 'info-circle'
  return getInstance(props)
}

Modal.success = function (props = {}) {
  props.type = 'success'
  props.iconType = 'check-circle'
  return getInstance(props)
}

Modal.error = function (props = {}) {
  props.type = 'error'
  props.iconType = 'cross-circle'
  return getInstance(props)
}

Modal.warning = function (props = {}) {
  props.type = 'warning'
  props.iconType = 'exclamation-circle'
  return getInstance(props)
}

export default Modal
