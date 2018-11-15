<template>
    <inner-card title="分配操作权限">
        <i-tree :data="departmentTree" show-checkbox></i-tree>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {operateRights} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'

export default {
    name: 'authorize-tab',
    data () {
        return {
            departmentTree: []
        }
    },
    components: {
        InnerCard
    },
    methods: {
        // 获取操作权限树结构
        getDepartmentTree () {
            operateRights.getDepartmentTree({}).then(res => {
                let tree = res.data
                replaceArrLabel(tree, 'name', 'title')
                this.departmentTree = tree
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    },
    mounted () {
        this.getDepartmentTree()
    }
}
</script>

<style>
</style>
