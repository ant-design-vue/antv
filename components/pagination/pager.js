export default {
  name: 'VPager',

  props: {
    page: {
      type: Number,
      default: 1
    },
    allPages: Number
  },

  render() {
    const { page, allPages } = this
    const pagers = []
    const pageBufferSize = 2

    if (allPages < 5 + (pageBufferSize * 2)) {
      for (let i = 1; i <= allPages; i++) {
        pagers.push(i)
      }
    } else {
      let left = Math.max(2, page - pageBufferSize)
      let right = Math.min(page + pageBufferSize, allPages - 1)

      if (page + pageBufferSize > allPages) {
        left = allPages - (pageBufferSize * 2)
      }

      if (page - pageBufferSize <= 0) {
        right = 1 + (pageBufferSize * 2)
      }
      pagers.push(1)
      if (left - pageBufferSize >= 1 && left !== 2) {
        pagers.push('prev')
      }

      for (let i = left; i <= right; i++) {
        pagers.push(i)
      }

      if (right + pageBufferSize <= allPages && right !== allPages - 1) {
        pagers.push('next')
      }
      pagers.push(allPages)
    }

    const pagerVM = pagers.map((pager) => {
      if (pager === 'prev' || pager === 'next') {
        const nextPrevData = {
          class: `ant-pagination-jump-${pager}`,
          on: {
            click: this.jumpNextPrev.bind(this, pager)
          }
        }
        return (<li {...nextPrevData}><a></a></li>)
      }
      const pagerData = {
        class: [
          [`ant-pagination-item-${pager}`],
          {
            'ant-pagination-item-active': page === pager
          }
        ],
        on: {
          click: this.onChange.bind(this, pager)
        }
      }
      return (<li class="ant-pagination-item" {...pagerData}><a>{pager}</a></li>)
    })
    return (<ul>{pagerVM}</ul>)
  },

  methods: {
    onChange(page) {
      this.$emit('onChange', page)
    },

    jumpNextPrev(page) {
      let jumpPage = page
      if (page === 'prev') {
        jumpPage = Math.max(1, this.page - 5)
      } else {
        jumpPage = Math.min(this.allPages, this.page + 5)
      }
      this.onChange(jumpPage)
    }
  }
}
