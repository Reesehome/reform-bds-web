<template>
    <inner-card title="修改权限">
        <i-tree :data="operateRightsTree" show-checkbox></i-tree>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {replaceArrLabel, pushIntoParent} from 'UTIL/assist'
import {operateRights} from 'SC_API'

export default {
    name: 'constitute-tab',
    data () {
        return {
            operateRightsTree: [],

        }
    },
    components: {
        InnerCard
    },
    methods: {
        // 获取操作权限树结构
        getOperateRightsTree () {
            operateRights.getOperateRightsTree({}).then(res => {
                let tree = res.data
                const treeLen = tree.length
                let arr = []
                for (let i = 0; i < treeLen; i++) {
                    if (!tree[i].parentId) {
                        arr.push(tree[i])
                    } else {
                        pushIntoParent(arr, tree[i])
                    }
                }
                replaceArrLabel(arr, 'name', 'title')
                this.operateRightsTree = arr
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
    },
    mounted () {
        this.getOperateRightsTree()
    }
}
</script>

<style>
</style>
