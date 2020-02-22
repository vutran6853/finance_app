import Vue from 'vue'

const Navbar = Vue.extend({
  name: 'Navbar',
  created() {
    console.log(this)
  },
  methods: {

    /***  Route to landing page   **/
    handleRoutToHome() {
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
      return null
    }
  },
  render() {
    return (
      <button style={{display: 'flex', alignItems: 'right'}} onClick={this.handleRoutToHome}>
        Home
      </button>
    )
  }
})

export default Navbar
