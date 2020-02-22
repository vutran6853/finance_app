import Vue from 'vue'
import ShowMeTheMoney from './showMeTheMoney/ShowMeTheMoney'


import './sale.css'

const Sale = Vue.extend({
  name: 'Sale',
  data() {
    return {
      current_price: '',
      discount_amount: '',
      total_amount: 0,
      isShowFinalAmount: false
    }
  },
  methods: {
    handleSetOrgPrice(event) {
      this.current_price = parseInt(event.target.value)
    },
    handleSetDiscountPrice(event) {
      this.discount_amount = parseInt(event.target.value)
    },
    handleComputed() {
      if (this.current_price !== '' && this.discount_amount !== '') {
        let discount = this.discount_amount / 100
        let saleDiscount = discount * this.current_price
        let total = this.current_price - saleDiscount
        this.total_amount = total
        this.isShowFinalAmount = true
      } else {
        console.log('TODO: MESSAGE USER INVAILD')
      }
    },
    handleResetState() {
      if (this.current_price !== '') {
        this.current_price = ''
        this.discount_amount = ''
        this.total_amount = 0
        this.isShowFinalAmount = false
      }
      return null
    }
  },
  computed: {
    showCurrentPrice: {
      get() {
        return this.current_price
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
              name="current_price"
              type="number"
              placeholder="normal price..." 
              value={this.showCurrentPrice} 
              onChange={this.handleSetOrgPrice} 
              onClick={this.handleResetState}/>
          </div>
          <div class="sale_form_items">
            <p>Sale or Discount:</p>
            <input 
              name="discount_amount"
              type="number"
              placeholder="sale or discount..." 
              value={this.discount_amount} 
              onChange={this.handleSetDiscountPrice}/>
          </div>
          <button onClick={this.handleComputed}>Sumit</button>
        </div>
        <ShowMeTheMoney isShowFinalAmount={this.isShowFinalAmount} total_amount={this.total_amount} />
      </div>
    )
  }
})

export default Sale