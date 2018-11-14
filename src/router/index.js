import Vue from 'vue'
import Router from 'vue-router'

/* Layout 父路由页面 */
import Layout from 'CMPT/layout/Layout'
import components from './modules/components'
import SCRouter from 'PAGE/systemConf/router/index.js'

Vue.use(Router)
export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () => import('PAGE/dashboard/Dashboard'),
                name: 'Dashboard'
            },
            // 系统管理模块
            {
                path: '/systemConf',
                component: () => import('PAGE/systemConf/SystemConfApp.vue'),
                children: [
                    ...SCRouter.options.routes
                ]
            }
        ],
        meta: {
            title: '天讯瑞达基础平台',
            icon: 'basic platform',
            noCache: true
        }
    },
    {
        path: '/404',
        component: () => import('PAGE/error/page/404'),
        hidden: true
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]
export const router = new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(route => {

})
export const asyncRouterMap = [
    ...components,
    {
        path: '/error',
        component: Layout,
        redirect: 'noredirect',
        name: 'ErrorPages',
        meta: {
            title: 'errorPages',
            icon: '404'
        },
        children: [
            {
                path: '404',
                component: () => import('PAGE/error/page/404'),
                name: 'Page404',
                meta: { title: 'page404', noCache: true }
            }
        ]
    },
    {
        path: '/error-log',
        redirect: 'noredirect',
        component: Layout,
        children: [
            {
                path: 'log',
                component: () => import('PAGE/error/log/index'),
                name: 'ErrorLog',
                meta: { title: 'errorLog', icon: 'bug' }
            }
        ]
    }
]
