import VPager from './pager'
import VOptions from './options'
import VSimplePager from './simple-pager'

export default {
  name: 'VPagination',

  props: {
    value: {
      type: Number,
      default: 1
    },
    total: Number,
    size: {
      type: String,
      default: ''
    },
    pageSize: {
      type: Number,
      default: 10
    },
    simple: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    showTotal: Function,
    pageSizeOptions: {
      type: Array,
      default() {
        return ['10', '20', '30', '40']
      }
    }
  },

  data() {
    return {
      currentPage: this.value,
      currentPageSize: this.pageSize,
      inputValue: this.value
    }
  },

  render() {
    const { simple, currentPage, pageSize, total, allPages, showTotal } = this
    const pagerData = {
      props: {
        allPages,
        page: currentPage
      },
      on: {
        onChange: this.handleChange
      }
    }

    let pager = null

    if (simple) {
      pager = (<VSimplePager {...pagerData}></VSimplePager>)
    } else {
      pager = (<v-pager {...pagerData}></v-pager>)
    }

    const optionsData = {
      props: {
        page: currentPage,
        ...this.$props
      },
      on: {
        onChange: this.handleChange,
        onSizeChange: this.onSizeChange
      }
    }

    const paginationData = {
      class: {
        mini: this.size === 'small',
        'ant-pagination-simple': this.simple
      }
    }

    let totalText
    if (showTotal) {
      totalText = (
        <span class="ant-pagination-total-text">Total {showTotal(
          total,
          [
            ((currentPage - 1) * pageSize) + 1,
            currentPage * pageSize > total ? total : currentPage * pageSize
          ]
        )} items</span>)
    }

    return (<ul class='ant-pagination' {...paginationData}>
      {totalText}
      <li
        onClick={this.prev}
        class={`${this.hasPrev() ? '' : 'ant-pagination-disabled'} ant-pagination-prev`}>
        <a></a>
      </li>
      {pager}
      <li
        onClick={this.next}
        class={`${this.hasNext() ? '' : 'ant-pagination-disabled'} ant-pagination-next`}>
        <a></a>
      </li>
      <v-options {...optionsData}></v-options>
    </ul>)
  },

  computed: {
    allPages() {
      return Math.ceil(this.total / this.currentPageSize)
    }
  },

  methods: {
    onSizeChange(pageSize) {
      this.currentPageSize = pageSize
      this.currentPage = this.currentPage > this.allPages ? this.allPages : this.currentPage
      this.$emit('onShowSizeChange', this.currentPage, pageSize)
    },

    prev() {
      if (!this.hasPrev()) return
      this.handleChange(this.currentPage - 1)
    },
    next() {
      if (!this.hasNext()) return
      this.handleChange(this.currentPage + 1)
    },
    hasPrev() {
      return this.currentPage > 1
    },
    hasNext() {
      return this.currentPage < this.allPages
    },
    handleChange(page) {
      if (this.isValid(page)) {
        if (page > this.allPages) {
          page = this.allPages
        }

        this.currentPage = page
        this.inputValue = page
        this.$emit('input', page)
        this.$emit('onChange', page, this.pageSize)

        return page
      }

      return this.currentPage
    },

    isValid(page) {
      return typeof page === 'number' && page >= 1 && page !== this.currentPage
    }
  },

  components: {
    VPager,
    VOptions,
    VSimplePager
  }
}
