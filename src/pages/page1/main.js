import Vue from 'vue'
import App from './Page1.vue'
import Page1Router from './router'

Vue.config.productionTip = false

new Vue({
    Page1Router,
    render: h => h(App),
}).$mount('#page1')
