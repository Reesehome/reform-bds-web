import Vue from 'vue'
import App from './App'

const vm = new Vue({
    render: h => h(App)
}).$mount('#system')

Vue.config.productionTip = false

export {
    vm
}