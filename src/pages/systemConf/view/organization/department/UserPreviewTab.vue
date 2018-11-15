<template>
    <inner-card title="部门人员预览">
        <i-table stripe :columns="userCols" :data="getOrdUsers()" :border="true"></i-table>
        <div class="pagination-wrapper">
            <div class="pagination">
                <i-page :total="20" :current="1" @on-change="changePage"></i-page>
            </div>
        </div>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {organization} from 'SC_API'
import store from 'SC_STORE'

export default {
    name: 'user-preview-tab',
    props: {
        deptId: {
            type: String
        }
    },
    data () {
        const validateFax = (rule, value, callback) => {
            if (!value) {
                callback()
            } else if (!isFax(value)) {
                callback(new Error('格式不正确：(区号-)电话号码'))
            } else {
                callback()
            }
        }
        return {
            userCols: [
                {
                    title: '用户名',
                    key: 'userName'
                },
                {
                    title: '登录账号',
                    key: 'loginName'
                },
                {
                    title: '性别',
                    key: 'gender'
                },
                {
                    title: '用户类型',
                    key: 'userType'
                },
                {
                    title: '办公电话',
                    key: 'officePhone'
                },
                {
                    title: '移动电话',
                    key: 'mobilePhone'
                },
                {
                    title: '邮箱',
                    key: 'email'
                }
            ],
        }
    },
    components: {
        InnerCard
    },
    methods: {
        // 获取部门人员列表
        getOrdUsers () {
            return store.state.orgUsers
        },
        changePage () {}
    },
    watch: {
        deptId(newVal) {
            this.getOrdUsers(newVal)
        }
    }
}
</script>

<style>
</style>
