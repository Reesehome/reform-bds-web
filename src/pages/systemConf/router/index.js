import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/systemConf/view1',
            component: () => import('../view/view1/View1.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {

    next()
})

router.afterEach(route => {

})
export default router