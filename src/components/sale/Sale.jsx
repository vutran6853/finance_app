import Vue from 'vue'
import ShowMeTheMoney from './showMeTheMoney/ShowMeTheMoney'
import './sale.css'

const Sale = Vue.extend({
  name: 'Sale',
  data() {
    return {
      currentPrice: '',
      discountAmount: '',
      totalAmount: 0,
      isShowFinalAmount: false
    }
  },
  methods: {
    handleSetOrgPrice(event) {
      this.currentPrice = parseInt(event.target.value)
    },
    handleSetDiscountPrice(event) {
      console.log('event.target.value ===', event.target.value)
      this.discountAmount = parseInt(event.target.value)
    },
    handleComputed() {
      if (this.currentPrice !== '' && this.discountAmount !== '') {
        let discount = this.discountAmount / 100
        let saleDiscount = discount * this.currentPrice
        let total = this.currentPrice - saleDiscount
        this.totalAmount = total
        this.isShowFinalAmount = true
      } else {
        console.log('TODO: MESSAGE USER INVAILD')
      }
    },
    handleResetState() {
      if (this.currentPrice !== '') {
        this.currentPrice = ''
        this.discountAmount = ''
        this.totalAmount = 0
        this.isShowFinalAmount = false
      }
      return null
    },
    handleIfKeyEnter(event) {
      if (event.key === 'Enter') {
        this.handleComputed()
      }
      return null
    }
  },
 
  computed: {
    showCurrentPrice: {
      get() {
        return this.currentPrice
      }
    }
  },
  render() {
    return (
      <div class="sale_container">
        {/* <Navbar /> */}
        <div class="sale_form_container">
          <div class="sale_form_items">
            <p>Normal Price:</p>
            <input 
              name="currentPrice"
              type="number"
              placeholder="Enter price..." 
              value={this.showCurrentPrice} 
              oninput={this.handleSetOrgPrice}
              onclick={this.handleResetState}/>
          </div>
          <div class="sale_form_items">
            <p>Sale or Discount:</p>
            <input
              name="discountAmount"
              type="number"
              placeholder="Enter sale or percent..." 
              value={this.discountAmount} 
              oninput={this.handleSetDiscountPrice}
              onkeypress={this.handleIfKeyEnter}/>
          </div>
          <button onclick={this.handleComputed}>Submit</button>
        </div>
        <ShowMeTheMoney isShowFinalAmount={this.isShowFinalAmount} totalAmount={this.totalAmount} />
      </div>
    )
  }
})

export default Sale