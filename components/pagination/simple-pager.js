import Mixins from './mixins'

export default {
  name: 'VSimplePager',

  mixins: [Mixins],

  render() {
    return (
      <li class='ant-pagination-simple-pager'>
        <input
          type="text"
          domProps-value={this.page}
          onKeydown={this.handleKeyDown}
          onKeyup={this.handleKeyUp}
          onChange={this.handleKeyUp}
        />
        <span class='ant-pagination-slas'>／</span>
        {this.allPages}
      </li>)
  }
}
