<template>
  <div class="login-page">
    <div>
      <a-row>
      <a-col :span="12">
        col-12
      </a-col>
      <a-col :span="12">
        col-12
      </a-col>
    </a-row>
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
</style>
