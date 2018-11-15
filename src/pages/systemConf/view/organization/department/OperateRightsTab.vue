<template>
    <inner-card title="配置操作权限">
        <i-tree :data="orgAuthorizeGroupTree" show-checkbox></i-tree>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {organization} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'

export default {
    name:'operate-rights-tab',
    props: {
        deptId: String
    },
    data () {
        return {
            orgAuthorizeGroupTree: []
        }
    },
    methods: {
        // 获取分配权限组树结构
        getAuthorizeGroupTree () {
            organization.getAuthorizeGroupTree({}).then(res => {
                replaceArrLabel(res.data, 'name', 'title')
                this.orgAuthorizeGroupTree = res.data
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    },
    components: {
        InnerCard
    },
    watch: {
        deptId(newVal) {
            this.getAuthorizeGroupTree(newVal)
        }
    }
}
</script>

<style>
</style>
