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
  render() {
    let renderShowFinalResult = this.isShowFinalAmount ? (
      <div>
        <p>The final sale price is ${this.totalAmount}</p>
      </div>
    ) : null

    return renderShowFinalResult
  }
})

export default ShowMeTheMoney