<template>
    <inner-card title="预览所有已授权的用户">
        <div class="actionBlock">
            <i-input search placeholder="请输入用户名、用户名首字母或登录账号" style="width:50%" />
            <i-button>重置</i-button>
        </div>
        <i-table stripe :columns="specificUserCols" :data="specificUser" :border="true" :highlight-row="true"></i-table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <i-page :total="10" :current="1"></i-page>
            </div>
        </div>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {operateRights} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'

 export default {
   data () {
     return {
            specificUser: [],
            specificUserCols: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '用户名',
                    key: 'userName'
                },
                {
                    title: '登录账号',
                    key: 'loginName'
                },
                {
                    title: '所属部门',
                    key: 'department'

                }]
     }
   },
   components: {
        InnerCard
   },
   methods: {
       // 获取已授权的用户
        getSpecificUser () {
            operateRights.getSpecificUser({}).then(res => {
                replaceArrLabel(res.data.rows, 'name', 'title')
                this.specificUser = res.data.rows
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
   },
   mounted () {
        this.getSpecificUser()
   }
 }
</script>

<style>
</style>
