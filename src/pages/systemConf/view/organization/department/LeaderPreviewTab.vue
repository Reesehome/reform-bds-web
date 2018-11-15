<template>
    <div>
        <inner-card title="部门领导预览">
            <!-- 操作按钮 -->
            <div class="actionBlock">
                <i-input placeholder="用户名查询" style="width: auto">
                    <i-icon type="ios-search" slot="suffix" class="searchBtn" />
                </i-input>
                <i-button @click="showLeaderModal = true">新增</i-button>
                <i-button>删除</i-button>
            </div>
            <i-table stripe :columns="leaderCols" :data="orgLeaders" :border="true" :loading="isLeaderListLoading"></i-table>
            <div class="pagination-wrapper">
                <div class="pagination">
                    <i-page :total="100" :current="1" @on-change="changePage"></i-page>
                </div>
            </div>
        </inner-card>
        <!-- 模态框 -->
        <i-modal v-model="showLeaderModal" title="新增领导" class="leaderModal">
            <i-form :model="setLeaderForm" :label-width="160">
                <i-form-item label="领导类型">
                    <i-select v-model="setLeaderForm.leaderType">
                        <i-option value="beijing">总经理</i-option>
                        <i-option value="shanghai">副总经理</i-option>
                        <i-option value="shenzhen">经理</i-option>
                        <i-option value="shenzhen">副经理</i-option>
                        <i-option value="shenzhen">秘书</i-option>
                        <i-option value="shenzhen">报销员</i-option>
                    </i-select>
                </i-form-item>
                <i-form-item label="用户名、首字母或账号">
                    <i-input v-model="setLeaderForm.searchText" :search="true" :enter-button="true" />
                </i-form-item>
            </i-form>
            <i-table stripe :columns="leaderCols" :data="orgLeaders" :border="true" :loading="isLeaderListLoading"></i-table>
            <div class="pagination-wrapper">
                <div class="pagination">
                    <i-page :total="100" :current="1" @on-change="changePage"></i-page>
                </div>
            </div>
        </i-modal>
    </div>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {organization} from 'SC_API'
import {replaceArrLabel} from 'UTIL/assist'

export default {
    name: 'leader-preview-tab',
    props: {
        deptId: {
            type: String
        }
    },
    data () {
        return {
            leaderCols: [
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
                    title: '领导类型',
                    key: 'leaderType'
                }
            ],
            orgLeaders: [],
            setLeaderForm: {
                leaderType: '',
                searchText: ''
            },
            showLeaderModal: false,
            isLeaderListLoading: false,
        }
    },
    components: {
        InnerCard
    },
    methods: {
        // 获取部门领导列表
        getOrgLeaders () {
            this.isLeaderListLoading = true
            organization.getOrgLeaders({}).then(res => {
                replaceArrLabel(res.data.rows, 'name', 'title')
                this.orgLeaders = res.data.rows
                this.isLeaderListLoading = false
            }).catch(err => {
                this.isLeaderListLoading = false
                this.$Message.error(err.message)
            })
        },
        changePage () {}
    },
    watch: {
        deptId(newVal) {
            this.getOrgLeaders(newVal)
        }
    }
}
</script>

<style>
.leaderModal .ivu-modal {
  width: 800px !important;
}
</style>>
