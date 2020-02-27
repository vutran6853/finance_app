<template>
  <div class="sale_container">
    <div class="sale_form_container">
      <div class="sale_form_items">
        <p>Normal Price:</p>
        <input
          name="currentPrice"
          type="number"
          v-model="showCurrentPrice"
          placeholder="Enter price..."
          @change="handleSetOrgPrice"
          @click="handleResetState"/>
      </div>
      <div class="sale_form_items">
        <p>Sale or Discount:</p>
        <input
          name="discountAmount"
          type="number"
          v-model="discountAmount"
          placeholder="Enter sale or percent..." 
          @change="handleSetDiscountPrice"
          @keypress="handleIfKeyEnter"/>
      </div>
      <button @click="handleComputed">Submit</button>
    </div>
    <ShowMeTheMoney v-bind:isShowFinalAmount="isShowFinalAmount" v-bind:totalAmount="totalAmount" />
  </div>
</template>


<script>
import ShowMeTheMoney from './showMeTheMoney/ShowMeTheMoney'

export default {
  name: 'Sale',
  components: {
    ShowMeTheMoney
  },
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
  }
}
</script>

<style>
.sale_container {
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  font-size: 2rem;
}

.sale_form_container {
  /* border: 2px solid red; */
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.sale_form_container > button {
  height: 2rem;
  font-size: 1.5rem;
  background-color: lightblue;
  cursor: pointer;
  border-radius: 5px;
}

.sale_form_container > button:hover {
  background-color: lightskyblue;
}

.sale_form_items > input {
  height: 2rem;
  width: 100%;
  font-size: 1.5rem;
}
</style>
