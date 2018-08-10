import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')