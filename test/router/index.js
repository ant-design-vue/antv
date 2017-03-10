import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/welcome'
import Grid from '../views/grid'
import Button from '../views/button'
import Menu from '../views/menu'
import Dropdown from '../views/dropdown'
import Input from '../views/input'
import Select from '../views/select'
import Collapse from '../views/collapse'
import Tooltip from '../views/tooltip'
import Popover from '../views/popover'
import Forms from '../views/forms'
import General from '../views/forms/general'
import Special from '../views/forms/special'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
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
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/select',
    name: 'select',
    component: Select
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
    path: '/forms',
    name: 'forms',
    component: Forms,
    children: [
      {
        path: '/general',
        name: 'general',
        component: General
      },
      {
        path: '/special',
        name: 'special',
        component: Special
      }
    ]
  },
  {
    path: '*',
    redirect: '/welcome'
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
