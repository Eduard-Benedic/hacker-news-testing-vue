import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { fetchListData } from './api/api'

import ProgressBar from './components/ProgressBar.vue'

function getTopItems () {
  return fetchListData('top')
    .then(items => items)
}


getTopItems().then((items) => {
  window.items = items

})

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

