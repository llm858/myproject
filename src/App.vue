<template>
  <div id="app">
    <div class="content-div">
    <router-view/>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from './components/myfooter.vue'
export default {
  name: 'App',
  components:{
    'myfooter':myfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
