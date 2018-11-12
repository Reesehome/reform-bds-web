import Vue from 'vue'
import SystemConfApp from './SystemConfApp.vue'
// import iView from 'iview'
import router from './router/index'
// Vue.use(iView)
// import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(SystemConfApp),
}).$mount('#systemConf')
