export default {
  name: 'VCard',

  props: {
    title: null,
    extra: null,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: Object,
    loading: {
      type: Boolean,
      default: false
    }
  },

  render() {
    const vLoading = (<div><p class="ant-card-loading-block" style="width: 94%;"></p>
      <p><span class="ant-card-loading-block" style="width: 28%;"></span>
        <span class="ant-card-loading-block" style="width: 62%;"></span></p>
      <p><span class="ant-card-loading-block" style="width: 22%;"></span>
        <span class="ant-card-loading-block" style="width: 66%;"></span></p>
      <p><span class="ant-card-loading-block" style="width: 56%;"></span>
        <span class="ant-card-loading-block" style="width: 39%;"></span></p>
      <p><span class="ant-card-loading-block" style="width: 21%;"></span>
        <span class="ant-card-loading-block" style="width: 15%;"></span><span
          class="ant-card-loading-block" style="width: 40%;"></span></p></div>)
    return (
      <div class="ant-card" {...{ class: this.classes }}>
        { this.title ? <div class="ant-card-head"><h3 class="ant-card-head-title">{this.title}</h3></div> : null}
        <div class="ant-card-extra">{this.extra || this.$slots.extra}</div>
        <div
          class="ant-card-body" {...{ style: this.bodyStyle }}>{ this.loading ? vLoading : this.$slots.default}</div>
      </div>)
  },

  computed: {
    classes() {
      return {
        'ant-card-bordered': this.bordered
      }
    }
  }
}
