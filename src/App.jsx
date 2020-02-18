import Vue from 'vue'
import './app.css'

const App = Vue.extend({
  name: 'App',
  render() {
    return (
      <div class="app_container">
        <router-view></router-view>
      </div>
    )
  }
})

export default App