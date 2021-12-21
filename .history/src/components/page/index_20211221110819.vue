<template>
  <div class="index">
      <LoginPage></LoginPage>
  </div>
</template>

<script>
import { Row, Col } from 'ant-design-vue'
import LoginPage from './LoginPage.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  },
  components: {
    Row,
    Col,
    SnfCarousel,
    SnfTextBox,
    SnfProductList,
    LoginPage
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
.index {
  background: url('../../assets/imgs/bg2.png') repeat-y;
  background-size: 100%;width:100%;heigth:100%
}
</style>