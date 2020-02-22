import Vue from 'vue'

const ShowMeTheMoney = Vue.extend({
  name: 'ShowMeTheMoney',
  props: {
    isShowFinalAmount: {
      type: Boolean,
      required: true
    },
    total_amount: {
      type: Number,
      required: true
    }
  },
  render() {
    let renderShowFinalResult = this.isShowFinalAmount ? (
      <div>
        <p>THE FINAL AMOUNT IS {this.total_amount}</p>
      </div>
    ) : null

    return renderShowFinalResult
  }
})

export default ShowMeTheMoney