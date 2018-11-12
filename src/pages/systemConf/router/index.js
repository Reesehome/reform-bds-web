import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        // 系统管理模块-菜单管理
        {
            path: '/system/menuSettings',
            name: 'MenuSetting',
            component: () => import('SC_VIEW/menuSettings/index')
        },
        // 系统管理模块-菜单模块
        // {
        //     path: '/system/menuModule',
        //     name: 'MenuModule',
        //     component: () => import('SC_VIEW/menuSettings/MenuModule')
        // },
        // 系统管理模块-组织机构
        // {
        //     path: '/system/organization',
        //     name: 'Organization',
        //     component: () => import('SC_VIEW/organization/index')
        // },
        // // 系统管理模块-操作权限
        // {
        //     path: '/system/operateRights',
        //     name: 'OperateRights',
        //     component: () => import('SC_VIEW/operateRights/index')
        // },
        // // 系统管理模块-操作权限
        // {
        //     path: '/system/dataRights',
        //     name: 'DataRights',
        //     component: () => import('SC_VIEW/dataRights/index')
        // },
        // // 系统管理模块-字典维护
        // {
        //     path: '/system/dictionary',
        //     name: 'Dictionary',
        //     component: () => import('SC_VIEW/dictionary/index')
        // },
        // // 系统管理模块-系统参数
        // {
        //     path: '/system/paramSettings',
        //     name: 'ParamSettings',
        //     component: () => import('SC_VIEW/paramSettings/index')
        // },
        // // 系统管理模块-登录日志
        // {
        //     path: '/system/loginLog',
        //     name: 'LoginLog',
        //     component: () => import('SC_VIEW/log/LoginLog')
        // },
        // 系统管理模块-操作日志
        {
            path: '/system/operateLog',
            name: 'OperateLog',
            component: () => import('SC_VIEW/log/OperateLog')
        }
    ]
})
export default router