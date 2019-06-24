import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.scss' // global css

import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/element-ui'

import Global from '@/utils'
import Components from '@/components'
import Loading from '@/utils/loading'
Vue.use(Global)
Vue.use(Components)
Vue.use(Loading)

// import MD5 from 'js-md5'
// import { Base64 } from 'js-base64'
// Vue.prototype.$md5 = MD5
// Vue.prototype.$base64 = Base64

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
