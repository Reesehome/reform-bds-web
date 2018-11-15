<template>
    <system-conf id="operatePermission">
        <!-- 菜单目录 -->
        <system-aside slot="systemAside" title="操作权限组列表" show-checkbox :asideTree="operateRightsGroupTree">
            <div slot="actionBlock">
                <i-button type="default" shape="circle" icon="md-add"></i-button>
                <i-button type="default" shape="circle" icon="md-trash"></i-button>
            </div>
        </system-aside>
        <!-- 编辑区 -->
        <i-card slot="systemEditor" title="操作权限-编辑区" icon="ios-cog">
            <i-button slot="extra" type="primary">保存</i-button>
            <i-tabs size="small" type="card" :value="activeTab">
                <!-- 基本信息 -->
                <i-tab-pane label="基本信息" name="baseInfoTab">
                    <baseinfo-tab></baseinfo-tab>
                </i-tab-pane>
                <!-- 包含的权限 -->
                <i-tab-pane label="包含的权限" name="constituteTab">
                    <constitute-tab></constitute-tab>
                </i-tab-pane>
                <!-- 部门授权 -->
                <i-tab-pane label="部门授权" name="AuthorizeTab">
                    <authorize-tab></authorize-tab>
                </i-tab-pane>
                <!-- 已授权的部门 -->
                <i-tab-pane label="已授权的部门" name="deptPrviewTab">
                    <dept-preview-tab></dept-preview-tab>
                </i-tab-pane>
                <!-- 已授权的用户 -->
                <i-tab-pane label="已授权的用户" name="userPreviewTab">
                    <user-preview-tab></user-preview-tab>
                </i-tab-pane>
            </i-tabs>
        </i-card>
    </system-conf>
</template>

<script>
import SystemConf from 'SC_VIEW/layout/SystemConf'
import SystemAside from 'SC_WIDGET/systemAside/SystemAside'

import BaseinfoTab from './BaseinfoTab'
import ConstituteTab from './ConstituteTab'
import AuthorizeTab from './AuthorizeTab'
import DeptPreviewTab from './DeptPreviewTab'
import UserPreviewTab from './UserPreviewTab'

import {organization} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'

export default {
    data () {
        return {
            activeTab: '',
            operateRightsGroupTree: []
        }
    },
    components: {
        SystemConf,
        SystemAside,
        BaseinfoTab,
        ConstituteTab,
        AuthorizeTab,
        DeptPreviewTab,
        UserPreviewTab
    },
    methods: {
        // 获取操作权限组树结构
        getOperateRightsGroupTree () {
            organization.getAuthorizeGroupTree({}).then(res => {
                replaceArrLabel(res.data, 'name', 'title')
                this.operateRightsGroupTree = res.data
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    },
    mounted () {
        this.getOperateRightsGroupTree()
    }
}
</script>

<style scoped lang="less" src="STYLE/view/systemConf/systemConf.less">
</style>
