import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'VIEW/layout/Layout'
import components from '../../components'

// import Page1Router from '../page1/router.js'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        // ...Page1Router.options.routes,
        {
            path: '/',
            component: Layout,
            redirect: 'dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('VIEW/dashboard/Dashboard'),
                    name: 'Dashboard'
                },
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {

    next()
})

router.afterEach(route => {

})

export default router
