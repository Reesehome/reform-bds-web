import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'
import 'STYLE/index.less' // global style
import '../../permission/permission' // permission control
import 'SRC/assets/fonts/simple-line-icons.min.css' // 基础平台图标样式
import 'STYLE/theme/theme.less'

if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function (err, vm, info, a) {
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.error(err, info)
    })
  }
}

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export {
  vm
}