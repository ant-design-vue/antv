import { Col, Row } from './grid'
import Button from './button'
import Icon from './icon'
import Menu from './menu'
import Breadcrumb from './breadcrumb'
import Dropdown from './dropdown'
import Input from './input'
import InputNumber from './input-number'
import Radio from './radio'
import Checkbox from './checkbox'
import Switch from './switch'
import Select from './select'
import Badge from './badge'
import Collapse from './collapse'
import Tooltip from './tooltip'
import Popover from './popover'
import Tag from './tag'
import Alert from './alert'
import Modal from './modal'
import Message from './message'
import Notification from './notification'
import Popconfirm from './popconfirm'

import VTransition from './transition'

const components = {
  Menu,
  SubMenu: Menu.SubMenu,
  MenuItemGroup: Menu.ItemGroup,
  MenuItem: Menu.Item,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  Dropdown,
  DropdownItem: Dropdown.DropdownItem,
  DropdownMenu: Dropdown.DropdownMenu,
  Col,
  Row,
  Button,
  ButtonGroup: Button.Group,
  Icon,
  Input,
  InputNumber,
  Radio,
  RadioButton: Radio.RadioButton,
  RadioGroup: Radio.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Switch,
  Select,
  Option: Select.Option,
  OptionGroup: Select.OptionGroup,
  Badge,
  Collapse,
  Panel: Collapse.Panel,
  Tooltip,
  Popover,
  Tag,
  Alert,
  Modal,
  Popconfirm,
  VTransition
}

Object.keys(components).forEach((key) => {
  if (!components[key].install && components[key].name) {
    components[key].install = (Vue) => {
      Vue.component(components[key].name, components[key])
    }
  }
})

const install = (Vue) => {
  if (install.installed) return

  Object.keys(components).forEach((key) => {
    if (components[key].install) {
      Vue.use(components[key])
    }
  })

  Vue.prototype.$message = Message
  Vue.prototype.$notification = Notification
}

export default {
  version: '0.0.1',
  install,
  ...components
}
