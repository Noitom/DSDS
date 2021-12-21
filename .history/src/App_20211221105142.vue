<template>
  <div id="app">
    <SnfMenuBar></SnfMenuBar>
    <router-view/>
    <SnfFooter v-if="false"></SnfFooter>
    <router-view/>
    <LoginPage></LoginPage>
  </div>
</template>

<script>
import SnfMenuBar from '@/components/sub/SnfMenuBar.vue'
import SnfFooter from '@/components/sub/SnfFooter.vue'
import LoginPage from './components/page/LoginPage.vue'
export default {
  name: 'App',
  components: {
    SnfMenuBar,
    SnfFooter,
    LoginPage
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
