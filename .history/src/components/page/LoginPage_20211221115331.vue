<template>
  <div class="login-page">
    <div class="log-bg">
      <div class="log-cloud1">
        <Row>
          <Col span="12" class="log-cloud2">图片区域</Col>
          <Col span="12" class="log-cloud3">登录区域</Col>
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
  width: 60%;
  height: 350px;
  background-color: pink;
}
</style>
