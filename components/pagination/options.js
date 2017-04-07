import Mixins from './mixins'

export default {
  name: 'VOptions',

  mixins: [Mixins],

  props: {
    showQuickJumper: Boolean,
    showSizeChanger: Boolean,
    pageSizeOptions: Array,
    pageSize: Number,
    size: String
  },

  data() {
    return {
      currentPageSize: this.pageSize
    }
  },

  render() {
    const options = this.pageSizeOptions.map(size =>
      (<v-option value={size}>{size} / page</v-option>))
    return (<div class="ant-pagination-options">
      {
        this.showSizeChanger ?
          <v-select class="ant-pagination-options-size-changer" size={this.size} value={this.pageSize.toString()}
                    on-onSelect={this.onSelect}>
            {options}
          </v-select>
          : null
      }
      {
        this.showQuickJumper ?
          <div class="ant-pagination-options-quick-jumper">Goto
            <input
              type="text"
              domProps-value={this.page}
              onKeydown={this.onKeyDown}
              onKeyup={this.onKeyUp}
              onChange={this.onKeyUp}
            />
          </div>
          : null
      }
    </div>)
  },

  methods: {
    onSelect(option) {
      this.$emit('onSizeChange', option)
      console.log(option)
    }
  }
}
