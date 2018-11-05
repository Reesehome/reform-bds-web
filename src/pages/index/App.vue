<template>
    <div id="App">
        <router-link to="/">home </router-link>
        <router-link to="/page1">page1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {

        }
    },
    components: {

    }
}
</script>

<style>
</style>
