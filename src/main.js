import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
