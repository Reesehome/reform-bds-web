<template>
    <inner-card title="预览所有已授权的部门">
        <div class="actionBlock">
            <i-input search placeholder="请输入名称或首字母" style="width:auto" />
            <i-button>重置</i-button>
        </div>
        <i-table stripe :columns="specificDepartmentCols" :data="specificDepartment" :border="true" :highlight-row="true"></i-table>
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
            specificDepartment: [],
            specificDepartmentCols: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '部门名称',
                    key: 'orgName'
                },
                {
                    title: '上级部门',
                    key: 'parentName'
                }
            ],
        }
    },
    components: {
        InnerCard
    },
    methods: {
        // 获取已授权的部门
        getSpecificDepartment () {
            operateRights.getSpecificDepartment({}).then(res => {
                replaceArrLabel(res.data.rows, 'name', 'title')
                this.specificDepartment = res.data.rows
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    },
    mounted () {
        this.getSpecificDepartment()
    }
}
</script>
