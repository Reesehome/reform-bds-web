<template>
  <div id="systemConf">
    <router-link to="/systemConf/view1">toView1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'SystemConf',
  components: {
  }
}
</script>

<style>
#app3 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  height: calc(100% - 81px); /*81为index的nav+footer*/
}
</style>
