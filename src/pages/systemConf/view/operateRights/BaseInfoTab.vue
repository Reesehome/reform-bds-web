<template>
    <inner-card title="修改基本信息">
        <i-form :label-width="100">
            <i-form-item label="名称">
                <i-input type="text" />
            </i-form-item>
            <i-form-item label="描述">
                <i-input type="textarea" />
            </i-form-item>
        </i-form>
    </inner-card>
</template>

<script>
import InnerCard from 'CMPT/inner/InnerCard'

export default {
    name: 'base-info-tab',
    data () {
        return {

        }
    },
    components: {
        InnerCard
    }
}
</script>

<style>
</style>
