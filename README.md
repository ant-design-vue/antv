# Ant Design of Vue

[[![npm package](https://img.shields.io/npm/v/antv.svg?style=flat-square)](https://www.npmjs.org/package/antv)

An enterprise-class UI design language and Vue-based implementation.

[中文 README](README-zh_CN.md)

## Features

- An enterprise-class UI design language for web applications.
- A high-quality Vue components based on superior [Ant Design](https://ant.design).
- A npm + webpack + babel + [Vue2.0](https://vuejs.org) front-end development workflow.

## Environment Support

* Browser: Modern browsers and Internet Explorer 9+

## Installation

### Using npm

**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of javascript packages and tooling.

```bash
$ npm install antv --save
```

If you are in a bad network enviornment，you can try other registers and tools like [cnpm](https://github.com/cnpm/cnpm).

### Import in Browser

Add `script` and `link` tags in your browser and use the global variable `antv`.

We provide `antv.js` `antv.css` and `antv.min.js` `antv.min.css` under `antv/dist` in antv's npm package.

## Usage

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

## Links

- [Antd](http://ant.design/)
- [Element UI](http://element.eleme.io)
- [UI library](/docs/Vue/introduce)
- [Design Code Quick Guide](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88)
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
