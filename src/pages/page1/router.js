import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/child1',
            name: 'child1',
            component: () => import('../page1/component/Child1.vue')
        },
        {
            path: '/child2',
            name: 'child2',
            component: () => import('../page1/component/Child2.vue')
        }
    ]
})
export default router