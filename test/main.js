// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antv from '../components'
import '../components/style/index.less'
import router from './router'
import App from './App'
import './assets/demo.less'
import './components'

Vue.use(Antv)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
