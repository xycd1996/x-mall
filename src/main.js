import Vue from 'vue'
// vue-cli3 插件引入，将引入插件直接绑定在this上
import Axios from './plugins/axios'
import App from '@/App'
import router from './router'
import store from './store/index'

import '@assets/scss/index.scss'

Vue.config.productionTip = false

Vue.use(Axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
