<template>
    <div id="layout">
        <div class="nav">
            <ul>
                <li>1nav</li>
                <li>2nav</li>
                <li>3nav</li>
                <li>4nav</li>
                <li>5nav</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
#layout {
  height: 100%;
  position: relative;
}
.nav {
  height: 100%;
  width: 60px;
  position: absolute;
  left: 0;
  top: 0;
  background: #555;
  color: #eee;
}
ul {
  width: 100%;
}
li {
  margin-right: 30px;
  text-decoration: none;
}
</style>
