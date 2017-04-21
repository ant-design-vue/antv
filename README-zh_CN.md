# Ant Design of Vue

[![npm package](https://img.shields.io/npm/v/antv.svg?style=flat-square)](https://www.npmjs.org/package/antv)

一套企业级的 UI 设计语言和 Vue 实现。

[README in English](README.md)

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 基于卓越的 [Ant Design](https://ant.design) 实现的高质量 Vue 组件。
- 基于 npm + webpack + babel + [Vue2.0](https://vuejs.org) 的工作流。

## 支持环境

* 现代浏览器和 IE9 及以上。

## 安装

### 使用 npm 安装

**我们推荐使用 npm 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install antv --save
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `antv`。

我们在 npm 发布包内的 `antv/dist` 目录下提供了 `antv.js` `antv.css` 以及 `antv.min.js` `antv.min.css`。

## 示例

```jsx
import Vue from 'vue'
import Antv from 'antv'
import 'antv/dist/antv.css'

Vue.use(Antv)

new Vue({
  el: '#app',
  render() {
     return (<v-button type="primary">Primary</v-button>)
  }
})
```

## 链接

- [Antd](http://ant.design/)
- [Element UI](http://element.eleme.io)
- [UI 组件库](/docs/vue/introduce)
- [设计规范速查手册](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88)
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
