import Vue from 'vue'

const ShowMeTheMoney = Vue.extend({
  name: 'ShowMeTheMoney',
  props: {
    isShowFinalAmount: {
      type: Boolean,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatter(passAmount) {
      let amount = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      })
      return amount.format(passAmount)
    }
  },
  render() {
    let renderShowFinalResult = this.isShowFinalAmount ? (
      <div>
        <p>The final sale price is {this.formatter(this.totalAmount)}</p>
      </div>
    ) : null

    return renderShowFinalResult
  }
})

export default ShowMeTheMoney