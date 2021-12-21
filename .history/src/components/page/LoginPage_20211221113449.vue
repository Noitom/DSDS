<template>
  <div class="login-page">
    <div class="log-bg">
      <div class="log-cloud1">
        <div >Welcome!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login-page{
  padding: 5% 0;
}
.log-bg {
  background-color: #afd6f0;
  height: 500px;
  width: 50%;
  margin: 0 auto;
  padding: 4% 0;
}
.log-cloud1 {
  background-color: #fff;
  border-radius: 25px;
  height: 400px;
  width: 80%;
  margin: 0 auto;
  padding: 5% 0;
}
</style>
