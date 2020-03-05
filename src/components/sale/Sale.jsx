import Vue from 'vue'
import ShowMeTheMoney from './showMeTheMoney/ShowMeTheMoney'
import stateSaleTax from '../../helpers/localState'
import './sale.css'

const Sale = Vue.extend({
  name: 'Sale',
  data() {
    return {
      currentPrice: '',
      discountAmount: '',
      totalAmount: 0,
      isShowFinalAmount: false,
      state: '',
      saleTax: ''
    }
  },
  methods: {
    handleSetOrgPrice(event) {
      this.currentPrice = parseInt(event.target.value)
    },
    handleSetDiscountPrice(event) {
      this.discountAmount = parseInt(event.target.value)
    },
    handleComputed() {
      if (this.currentPrice !== '' && this.saleTax !== '') {
        let tax = parseFloat(this.saleTax) / 100.0
        let discount = this.discountAmount / 100
        let total = this.currentPrice - (this.currentPrice * discount)
        let sumTotal = total * tax
        this.totalAmount = total + sumTotal
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
    },
    handleSetStateTax(event) {
      if (event.target.value !== '----') {
        this.saleTax = event.target.value
      } else {
        this.saleTax = ''
      }
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
            <p>State:</p>
            <div style="font-size: 20px">
              <select onchange={this.handleSetStateTax}>
                <option defaultValue="---">----</option>
                {stateSaleTax.map((value) => {
                  return (
                    <option key={value.id} value={value.sale}>{value.state}</option>
                  )
                })}
              </select>
              {this.saleTax !== '' ? <span>{this.saleTax}%</span> : null}
            </div>
          </div>
          <div class="sale_form_items">
            <p>Price:</p>
            <input 
              name="currentPrice"
              type="number"
              placeholder="Enter price..." 
              value={this.showCurrentPrice} 
              oninput={this.handleSetOrgPrice}
              onclick={this.handleResetState}
              onkeypress={this.handleIfKeyEnter}/>
          </div>
          <div class="sale_form_items">
            <p>Discount:</p>
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