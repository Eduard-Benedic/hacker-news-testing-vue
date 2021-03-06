import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ProgressBar from './components/ProgressBar.vue'


const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

