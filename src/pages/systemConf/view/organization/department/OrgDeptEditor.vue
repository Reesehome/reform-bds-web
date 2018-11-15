<template>
    <!-- 部门编辑及授权 -->
    <i-card title="部门编辑及授权" icon="ios-cog">
        <i-button type="primary" slot="extra" @click="handleSave" :loading="isSaveBtnLoading">保存</i-button>
        <i-tabs size="small" type="card" :value="activeTab" @on-click="changeTab">
            <i-tab-pane label="基本信息" name="baseInfoTab">
                <!-- 基本属性 -->
                <baseinfo-tab :deptId="deptId"></baseinfo-tab>
            </i-tab-pane>
            <i-tab-pane label="操作权限" name="operateRightsTab">
                <!-- 操作权限 -->
                <operate-rights-tab :deptId="deptId"></operate-rights-tab>
            </i-tab-pane>
            <i-tab-pane label="数据权限" name="dataRightsTab">
                <!-- 数据权限 -->
                <inner-card title="配置数据权限">
                    <i-row :gutter="24">
                        <i-col :sm="10" :xs="24">
                            <inner-tree title="权限目录" :data="orgDataAuthorityTree"></inner-tree>
                        </i-col>
                        <i-col :sm="14" :xs="24">
                            <inner-tree title="权限分配" :data="orgRightsDataTree" show-checkbox></inner-tree>
                        </i-col>
                    </i-row>
                </inner-card>
            </i-tab-pane>
            <i-tab-pane label="部门人员" name="userPreviewTab">
                <!-- 部门人员预览 -->
                <user-preview-tab :deptId="deptId"></user-preview-tab>
            </i-tab-pane>
            <i-tab-pane label="部门领导" name="leaderPreviewTab">
                <!-- 部门领导预览 -->
                <leader-preview-tab :deptId="deptId"></leader-preview-tab>
            </i-tab-pane>
        </i-tabs>
    </i-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import InnerTree from 'CMPT/inner/InnerTree'
import BaseinfoTab from './BaseinfoTab'
import OperateRightsTab from './OperateRightsTab'
import UserPreviewTab from './UserPreviewTab'
import LeaderPreviewTab from './LeaderPreviewTab'

import {organization} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'
import {isFax} from 'UTIL/validate'

export default {
    name: 'org-dept-editor',
    props: {
        newUser: Boolean,
        activeTab: String,
        deptId: String // 只转发之用
    },
    data () {
        return {
            isSaveBtnLoading: false,
            orgDataAuthorityTree: [],
            orgRightsDataTree: [],
        }
    },
    components: {
        InnerCard,
        InnerTree,
        BaseinfoTab,
        OperateRightsTab,
        UserPreviewTab,
        LeaderPreviewTab
    },
    methods: {
        changeTab (name) {
            this.$parent.activeTab = name
            switch (name) {
                case 'operateRightsTab':
                    // this.getAuthorizeGroupTree()
                    break
                case 'dataRightsTab':
                    this.getDataAuthorityTree()
                    this.getRightsDataTree()
                    break
                case 'leaderPreviewTab':
                    // this.getOrgLeaders()
            }
        },
        // 获取数据权限目录
        getDataAuthorityTree () {
            organization.getDataAuthorityTree({}).then(res => {
                replaceArrLabel(res.data, 'name', 'title')
                this.orgDataAuthorityTree = res.data
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        // 获取数据权限树结构
        getRightsDataTree () {
            organization.getRightsDataTree({}).then(res => {
                replaceArrLabel(res.data, 'name', 'title')
                this.orgRightsDataTree = res.data
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        // 保存修改
        handleSave () {
            this.isSaveBtnLoading = true
            // baseInfoTab内容检查
            this.$refs['departmentData'].validate((valid) => {
                if (!valid) {
                    this.$parent.activeTab = 'baseInfoTab'
                    this.$Message.error('信息填写有误，请检查')
                    return
                }
                this.$Message.success('保存成功')
            })
            // 模拟执行提交接口
            setTimeout(() => {
                this.isSaveBtnLoading = false
            }, 2000)
        }
    }
}
</script>

<style scoped lang="less" src="STYLE/view/systemConf/systemConf.less">
</style>
<style scoped lang="less" src="STYLE/view/systemConf/organization.less">
</style>
