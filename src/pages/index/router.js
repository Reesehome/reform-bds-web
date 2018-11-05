import Vue from 'vue'
import Router from 'vue-router'
import Page1Router from '../page1/router.js'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...Page1Router.options.routes,
        {
            path: '/',
            component: () => import('../../components/HelloWorld.vue')
        },
        {
            path: '/page1',
            component: () => import('../page1/Page1.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {

    next()
})

router.afterEach(route => {

})

export default router
