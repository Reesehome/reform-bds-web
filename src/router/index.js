import Vue from 'vue'
import Router from 'vue-router'

/* Layout 父路由页面 */
import Layout from 'CMPT/layout/Layout'
import components from './modules/components'
import systemConf from 'PAGE/systemConf/router/index.js'

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
            // 第二页
            {
                path: '/system/menuSettings',
                name: 'MenuSettings',
                component: () => import('PAGE/page2/App.vue')
            },
            // 第三页
            {
                path: '/systemConf',
                component: () => import('PAGE/systemConf/SystemConf.vue'),
                children: [
                    ...systemConf.options.routes
                ]
            }
            // 系统管理模块-菜单模块
            // {
            //     path: '/system/menuModule',
            //     name: 'MenuModule',
            //     component: () => import('PAGE/systemConf/menuSettings/MenuModule')
            // },
            // 系统管理模块-组织机构
            // {
            //     path: '/system/organization',
            //     name: 'Organization',
            //     component: () => import('PAGE/systemConf/organization/index')
            // },
            // 系统管理模块-操作权限
            // {
            //     path: '/system/operateRights',
            //     name: 'OperateRights',
            //     component: () => import('PAGE/systemConf/operateRights/index')
            // },
            // 系统管理模块-操作权限
            // {
            //     path: '/system/dataRights',
            //     name: 'DataRights',
            //     component: () => import('PAGE/systemConf/dataRights/index')
            // },
            // 系统管理模块-字典维护
            // {
            //     path: '/system/dictionary',
            //     name: 'Dictionary',
            //     component: () => import('PAGE/systemConf/dictionary/index')
            // },
            // 系统管理模块-系统参数
            // {
            //     path: '/system/paramSettings',
            //     name: 'ParamSettings',
            //     component: () => import('PAGE/systemConf/paramSettings/index')
            // },
            // 系统管理模块-登录日志
            // {
            //     path: '/system/loginLog',
            //     name: 'LoginLog',
            //     component: () => import('PAGE/systemConf/log/loginLog')
            // },
            // 系统管理模块-操作日志
            // {
            //     path: '/system/operateLog',
            //     name: 'OperateLog',
            //     component: () => import('PAGE/systemConf/log/operateLog')
            // }
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
