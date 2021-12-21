<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
<template>
  <div class="login-page">
    <div class="log-bg">
      <div class="log-cloud1">
        <Row>
          <Col span="12" class="log-cloud2">
          <div>
            <img src="@/assets/img-1.jpg">
          </div>
          </Col>
          <Col span="12" class="log-cloud3">
          <div><h3 class="log-txt">Translator Login</h3></div>
          <div class="log-cloud4">
          <input type="text" placeholder="Username" class="log-input">
          <input type="password" placeholder="Password" class="log-input">
          <a href="#" class="log-btn">Login</a>
          </div>
          </Col>
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
.login-page{
  padding: 5% 0;
}
.log-bg {
  background-color: #cce4f1;
  height: 550px;
  width: 60%;
  margin: 0 auto;
  padding: 4% 0;
}
img{
  /* height: 400px;
  width: 110%; */
  width: auto;
  max-width: 100%;
  border-radius: 20px;
  opacity:0.8;
  hidden-phone;
}
.log-cloud1 {
  background-color: #fff;
  border-radius: 20px;
  height: 400px;
  width: 80%;
  margin: 0 auto;
  /* padding: 5% 0; */
}
.log-cloud2 {
  width: 40%;
  height: 350px;
}
.log-cloud3 {
  width: 55%;
  height: 340px;
}
.log-cloud4{
  height: 330px;
  padding: 10% 0;
}
.log-txt{
  padding-top: 40px;
  padding-bottom: 10px;
  font-size: 20px;
  font-display: 微软雅黑;
}
.log-input{
  width: 80%;
  overflow: hidden;
  padding: 0 15px;
  font-size: 13px;
  border: 1px solid #EBEBEB;
  margin:0 auto 15px;
  height: 48px;
  line-height: 48px;
}
.log-btn{
  width:25%;
  display: block;
  text-align: center;
  line-height: 45px;
  margin:5% 65%;
  height:45px;
  color:#fff;
  font-size:13px;
  background-color: #50E3CE;
  border-radius: 15px;
}
</style>
