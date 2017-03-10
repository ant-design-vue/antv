import { Col, Row } from './grid'
import Button from './button'
import Icon from './icon'
import Menu from './menu'
import Dropdown from './dropdown'
import Input from './input'
import Select from './select'
import Collapse from './collapse'
import Tooltip from './tooltip'
import Popover from './popover'

import VTransition from './transition'

const components = {
  Menu,
  SubMenu: Menu.SubMenu,
  MenuItemGroup: Menu.ItemGroup,
  MenuItem: Menu.Item,
  Dropdown,
  DropdownItem: Dropdown.DropdownItem,
  DropdownMenu: Dropdown.DropdownMenu,
  Col,
  Row,
  Button,
  ButtonGroup: Button.Group,
  Icon,
  Input,
  Select,
  Option: Select.Option,
  OptionGroup: Select.OptionGroup,
  Collapse,
  Panel: Collapse.Panel,
  Tooltip,
  Popover,
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
}

export default {
  version: '0.0.1',
  install,
  ...components
}
