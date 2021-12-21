<template>
  <div class="login-page">
    <div class="log-bg">
      <div class="log-cloud1">
        <Row>
          <Col span="12" class="log-cloud2">图片区域</Col>
          <Col span="12" class="log-cloud3">
          <div class="log-logo">Welcome!</div>
          <input type="text" placeholder="username" :class="'log-input' + (account==''?' log-input-empty':'')" v-model="account">
          <input type="password" placeholder="Password" :class="'log-input' + (password==''?' log-input-empty':'')"  v-model="password">
          <a href="javascript:;" class="log-btn" @click="login">Login</a>
          </Col>
           <Loading v-if="isLoging" marginTop="-30%"></Loading>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import { Row, Col } from 'ant-design-vue'
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Row,
    Col
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
  height: 550px;
  width: 60%;
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
.log-cloud2 {
  width: 40%;
  height: 350px;
}
.log-cloud3 {
  width: 55%;
  height: 340px;
  background-color: pink;
}
/* .log-input{
  width: 370px;
  overflow: hidden;
  padding: 0 15px;
  font-size: 13px;
  border: 1px solid #EBEBEB;
  margin:0 auto 15px;
  height: 48px;
  line-height: 48px;
} */
</style>
