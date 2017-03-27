import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import Grid from '../views/grid'
import Button from '../views/button'
import Menu from '../views/menu'
import Tabs from '../views/tabs'
import Breadcrumb from '../views/breadcrumb'
import Dropdown from '../views/dropdown'
import Input from '../views/input'
import InputNumber from '../views/input-number'
import Radion from '../views/radio'
import Checkbox from '../views/checkbox'
import Switch from '../views/switch'
import Select from '../views/select'
import Badge from '../views/badge'
import Card from '../views/card'
import Collapse from '../views/collapse'
import Tooltip from '../views/tooltip'
import Tag from '../views/tag'
import Alert from '../views/alert'
import Modal from '../views/modal'
import Message from '../views/message'
import Notification from '../views/notification'
import Popconfirm from '../views/popconfirm'
import Popover from '../views/popover'
import Forms from '../views/forms'
import General from '../views/forms/general'
import Special from '../views/forms/special'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/grid',
        name: 'grid',
        component: Grid
      },
      {
        path: '/button',
        name: 'button',
        component: Button
      },
      {
        path: '/dropdown',
        name: 'dropdown',
        component: Dropdown
      },
      {
        path: '/menu',
        name: 'menu',
        component: Menu
      },
      {
        path: '/tabs',
        name: 'tabs',
        component: Tabs
      },
      {
        path: '/breadcrumb',
        name: 'breadcrumb',
        component: Breadcrumb
      },
      {
        path: '/input',
        name: 'input',
        component: Input
      },
      {
        path: '/input-number',
        name: 'input-number',
        component: InputNumber
      },
      {
        path: '/radio',
        name: 'radio',
        component: Radion
      },
      {
        path: '/checkbox',
        name: 'checkbox',
        component: Checkbox
      },
      {
        path: '/switch',
        name: 'switch',
        component: Switch
      },
      {
        path: '/select',
        name: 'select',
        component: Select
      },
      {
        path: '/badge',
        name: 'badge',
        component: Badge
      },
      {
        path: '/card',
        name: 'card',
        component: Card
      },
      {
        path: '/collapse',
        name: 'collapse',
        component: Collapse
      },
      {
        path: '/tooltip',
        name: 'tooltip',
        component: Tooltip
      },
      {
        path: '/popover',
        name: 'popover',
        component: Popover
      },
      {
        path: '/tag',
        name: 'tag',
        component: Tag
      },
      {
        path: '/alert',
        name: 'alert',
        component: Alert
      },
      {
        path: '/modal',
        name: 'modal',
        component: Modal
      },
      {
        path: '/message',
        name: 'message',
        component: Message
      },
      {
        path: '/notification',
        name: 'notification',
        component: Notification
      },
      {
        path: '/popconfirm',
        name: 'popconfirm',
        component: Popconfirm
      },
      {
        path: '/forms',
        name: 'forms',
        component: Forms,
        children: [
          {
            path: 'general',
            name: 'general',
            component: General
          },
          {
            path: 'special',
            name: 'special',
            component: Special
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
