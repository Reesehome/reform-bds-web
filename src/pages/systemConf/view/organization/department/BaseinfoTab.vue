<template>
    <inner-card title="修改基本属性">
        <i-form ref="departmentData" :model="departmentData" :rules="ruleValidate" :label-width="120">
            <i-form-item label="上级部门" prop="parentName">
                <i-input v-model="departmentData.parentName" disabled></i-input>
            </i-form-item>
            <i-form-item label="部门名称" prop="orgName">
                <i-input type="text" v-model="departmentData.orgName" placeholder="请输入" />
            </i-form-item>
            <i-form-item label="部门类型" prop="typeId">
                <i-select v-model="departmentData.typeId">
                    <i-option value="class">班组</i-option>
                    <i-option value="dept">部门</i-option>
                    <i-option value="group">集团</i-option>
                    <i-option value="company">公司</i-option>
                    <i-option value="position">岗位</i-option>
                </i-select>
            </i-form-item>
            <i-form-item label="是否OA部门" prop="isOA">
                <i-radio-group v-model="departmentData.isOA">
                    <i-radio label="Y">
                        <span>是</span>
                    </i-radio>
                    <i-radio label="N">
                        <span>否</span>
                    </i-radio>
                </i-radio-group>
            </i-form-item>
            <i-form-item label="联系电话" prop="phone">
                <i-input v-model="departmentData.phone" placeholder="请输入">
                </i-input>
            </i-form-item>
            <i-form-item label="传真" prop="fax">
                <i-input v-model="departmentData.fax" placeholder="请输入">
                </i-input>
            </i-form-item>
            <i-form-item label="公务邮箱" prop="email">
                <i-input v-model="departmentData.email" type="email" placeholder="请输入">
                </i-input>
            </i-form-item>
            <i-form-item label="备注" prop="remark">
                <i-input v-model="departmentData.remark" type="textarea" placeholder="请输入">
                </i-input>
            </i-form-item>
        </i-form>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'
import {organization} from 'SC_API'

export default {
    name: 'base-info',
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
            departmentData: {},
            ruleValidate: {
                orgName: [{required: true, message: '必填项', trigger: 'blur'}],
                typeId: [{required: true, message: '必填项', trigger: 'blur'}],
                isOA: [{required: true, message: '必填项', trigger: 'change'}],
                phone: [
                    {required: true, message: '必填项', trigger: 'blur'},
                    { validator: validateFax, trigger: 'blur' }
                ],
                fax: [{ validator: validateFax, trigger: 'blur' }],
                email: [
                    {required: true, message: '必填项', trigger: 'blur'},
                    {type: 'email', message: '格式不正确：登录名@主机名.域名', trigger: 'blur'}
                ],
                remark: [{max: 200, message: '格式错误：长度不应超出200', trigger: 'blur'}]
            }
        }
    },
    components: {
        InnerCard
    },
    methods: {
        getDeptBaseInfo (deptId) {
            organization.getDepartentData({deptId: deptId}).then(res => {
                this.departmentData = res.data
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    },
    watch: {
        deptId(newVal) {
            this.getDeptBaseInfo(newVal)
        }
    }
}
</script>

<style>
</style>
